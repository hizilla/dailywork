(function () {
  "use strict";

  // ---------- 工具 ----------
  function $(id) { return document.getElementById(id); }

  function escape(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function fmtDate(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  async function fetchText(path) {
    var res = await fetch(path, { cache: "no-cache" });
    if (!res.ok) throw new Error(path + " -> " + res.status);
    return await res.text();
  }

  // ---------- 解析 projects.md ----------
  // 每个项目以 --- 包裹，块内是 key: value 形式
  function parseProjects(md) {
    var blocks = md.split(/^\s*---\s*$/m)
      .map(function (b) { return b.trim(); })
      .filter(function (b) { return b.length > 0; });

    return blocks.map(function (block) {
      var obj = {};
      block.split(/\r?\n/).forEach(function (line) {
        var m = line.match(/^([a-zA-Z_]+)\s*:\s*(.*)$/);
        if (m) {
          var k = m[1].trim();
          var v = m[2].trim();
          if (k === "progress") v = parseInt(v, 10) || 0;
          obj[k] = v;
        }
      });
      return obj;
    }).filter(function (p) { return p.name; });
  }

  // ---------- 解析 todos.md ----------
  // 识别 - [ ] 与 - [x] 行
  function parseTodos(md) {
    var items = [];
    md.split(/\r?\n/).forEach(function (line) {
      var m = line.match(/^\s*-\s*\[( |x|X)\]\s+(.*)$/);
      if (m) {
        items.push({ done: m[1].toLowerCase() === "x", text: m[2].trim() });
      }
    });
    return items;
  }

  // ---------- 解析 activities.md ----------
  // ## YYYY-MM-DD 下面跟 - 项
  function parseActivities(md) {
    var days = [];
    var current = null;
    md.split(/\r?\n/).forEach(function (line) {
      var h = line.match(/^##\s+(.*)$/);
      if (h) {
        current = { date: h[1].trim(), items: [] };
        days.push(current);
      } else if (current) {
        var li = line.match(/^\s*-\s+(.*)$/);
        if (li) current.items.push(li[1].trim());
      }
    });
    return days;
  }

  // ---------- 解析 contributions.md ----------
  // 每行 YYYY-MM-DD: N
  function parseContribs(md) {
    var map = {};
    md.split(/\r?\n/).forEach(function (line) {
      var m = line.match(/^(\d{4}-\d{2}-\d{2})\s*:\s*(\d+)/);
      if (m) map[m[1]] = parseInt(m[2], 10);
    });
    return map;
  }

  // ---------- 渲染：看板 ----------
  function renderProjects(projects) {
    var statuses = ["doing", "todo", "done"];
    statuses.forEach(function (st) {
      var list = projects.filter(function (p) {
        return (p.status || "todo").toLowerCase() === st;
      });
      $("count-" + st).textContent = list.length;
      var html = list.length === 0
        ? '<div class="empty">暂无</div>'
        : list.map(function (p) {
            var prog = Math.max(0, Math.min(100, p.progress || 0));
            var nameHtml = p.repo
              ? '<a href="' + escape(p.repo) + '" target="_blank" rel="noopener">' + escape(p.name) + "</a>"
              : escape(p.name);
            return '<div class="card">' +
              '<div class="card-name">' + nameHtml + "</div>" +
              (p.desc ? '<div class="card-desc">' + escape(p.desc) + "</div>" : "") +
              '<div class="card-meta">' +
                (p.lang ? '<span class="tag">' + escape(p.lang) + "</span>" : "") +
                '<span class="progress"><i style="width:' + prog + '%"></i></span>' +
                '<span>' + prog + '%</span>' +
                (p.updated ? '<span class="updated">· ' + escape(p.updated) + "</span>" : "") +
              "</div>" +
            "</div>";
          }).join("");
      $("cards-" + st).innerHTML = html;
    });

    $("stat-projects").textContent = projects.filter(function (p) {
      return (p.status || "").toLowerCase() === "doing";
    }).length;
  }

  // ---------- 渲染：待办 ----------
  function renderTodos(items) {
    if (items.length === 0) {
      $("todo").innerHTML = '<li class="empty">本周暂无待办</li>';
      $("stat-week").textContent = "0";
      return;
    }
    $("todo").innerHTML = items.map(function (it) {
      return '<li class="' + (it.done ? "done" : "") + '">' +
        '<span class="checkbox"></span>' +
        '<span class="text">' + escape(it.text) + "</span>" +
      "</li>";
    }).join("");
    var open = items.filter(function (i) { return !i.done; }).length;
    $("stat-week").textContent = open;
  }

  // ---------- 渲染：时间线 ----------
  function renderActivities(days) {
    if (days.length === 0) {
      $("timeline").innerHTML = '<li class="empty">暂无活动</li>';
      return;
    }
    $("timeline").innerHTML = days.map(function (d) {
      return '<li class="day">' +
        '<div class="day-date">' + escape(d.date) + "</div>" +
        '<ul class="day-items">' +
          d.items.map(function (it) { return "<li>" + escape(it) + "</li>"; }).join("") +
        "</ul>" +
      "</li>";
    }).join("");
  }

  // ---------- 渲染：热力图 ----------
  function contribLevel(n) {
    if (n <= 0) return 0;
    if (n <= 2) return 1;
    if (n <= 4) return 2;
    if (n <= 6) return 3;
    return 4;
  }

  function renderHeatmap(map) {
    var WEEKS = 12;
    var end = new Date();
    end.setHours(0, 0, 0, 0);
    var start = new Date(end);
    start.setDate(start.getDate() - (WEEKS * 7 - 1));
    start.setDate(start.getDate() - start.getDay()); // 对齐到周日

    var total = WEEKS * 7;
    var html = "";
    var sum = 0;
    for (var i = 0; i < total; i++) {
      var d = new Date(start);
      d.setDate(d.getDate() + i);
      var key = fmtDate(d);
      var n = map[key] || 0;
      sum += n;
      var lv = contribLevel(n);
      html += '<i class="cell lv-' + lv + '" title="' + key + ": " + n + ' 次贡献"></i>';
    }
    $("heatmap").innerHTML = html;
    $("stat-contribs").textContent = sum;
  }

  // ---------- 错误态 ----------
  function fail(el, msg) {
    if (typeof el === "string") el = $(el);
    el.innerHTML = '<div class="err">加载失败：' + escape(msg) + "</div>";
  }

  // ---------- 入口 ----------
  async function main() {
    $("year").textContent = new Date().getFullYear();

    var tasks = [
      { url: "data/projects.md", render: renderProjects, parse: parseProjects, target: "cards-doing" },
      { url: "data/todos.md", render: renderTodos, parse: parseTodos, target: "todo" },
      { url: "data/activities.md", render: renderActivities, parse: parseActivities, target: "timeline" },
      { url: "data/contributions.md", render: renderHeatmap, parse: parseContribs, target: "heatmap" }
    ];

    await Promise.all(tasks.map(async function (t) {
      try {
        var text = await fetchText(t.url);
        var data = t.parse(text);
        t.render(data);
      } catch (e) {
        fail(t.target, e.message);
      }
    }));
  }

  document.addEventListener("DOMContentLoaded", main);
})();
