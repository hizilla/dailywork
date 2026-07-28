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

  // ---------- 渲染：mptcp 可贡献问题 ----------
  function renderMptcpIssues(issues) {
    var open = issues.filter(function (i) {
      return (i.status || "open").toLowerCase() === "open";
    });
    $("mptcp-count-open").textContent = open.length;
    if (issues.length === 0) {
      $("mptcp-issues").innerHTML = '<div class="empty">暂无问题</div>';
      return;
    }
    var order = { easy: 0, medium: 1, hard: 2 };
    var sorted = issues.slice().sort(function (a, b) {
      return (order[a.diff] || 9) - (order[b.diff] || 9);
    });
    $("mptcp-issues").innerHTML = sorted.map(function (it) {
      var loc = it.file ? (it.file + (it.line ? ":" + it.line : "")) : "";
      var url = it.file
        ? "https://github.com/torvalds/linux/blob/master/" + it.file + (it.line ? "#L" + it.line : "")
        : null;
      var locHtml = loc
        ? (url
            ? '<a class="issue-loc" href="' + escape(url) + '" target="_blank" rel="noopener">' + escape(loc) + "</a>"
            : '<span class="issue-loc">' + escape(loc) + "</span>")
        : "";
      var diff = it.diff || "medium";
      var tags = (it.tags || "").split(",").map(function (t) { return t.trim(); }).filter(Boolean);
      return '<div class="issue">' +
        '<div class="issue-head">' +
          '<span class="issue-title">' + escape(it.title || "(无标题)") + "</span>" +
          locHtml +
        "</div>" +
        (it.desc ? '<div class="issue-desc">' + escape(it.desc) + "</div>" : "") +
        '<div class="issue-meta">' +
          '<span class="badge diff-' + escape(diff) + '">' + escape(diff) + "</span>" +
          (it.status && it.status !== "open" ? '<span class="badge">' + escape(it.status) + "</span>" : "") +
          tags.map(function (t) { return '<span class="badge tag">' + escape(t) + "</span>"; }).join("") +
        "</div>" +
      "</div>";
    }).join("");
  }

  // ---------- 解析：mptcp 近期动态 ----------
  // 支持格式：
  //   ## YYYY-MM-DD
  //   - [lore] subject text
  //     https://lore.kernel.org/...
  //   - [gh] subject
  //     https://github.com/...
  function parseMptcpActivity(md) {
    var days = [];
    var current = null;
    var lastItem = null;
    md.split(/\r?\n/).forEach(function (line) {
      var h = line.match(/^##\s+(.*)$/);
      if (h) {
        current = { date: h[1].trim(), items: [] };
        days.push(current);
        lastItem = null;
        return;
      }
      if (!current) return;
      var li = line.match(/^\s*-\s+(.*)$/);
      if (li) {
        var text = li[1].trim();
        var src = null;
        var m = text.match(/^\[([a-zA-Z]+)\]\s*(.*)$/);
        if (m) { src = m[1].toLowerCase(); text = m[2].trim(); }
        lastItem = { src: src, text: text, url: null };
        current.items.push(lastItem);
      } else {
        var u = line.match(/^\s+(https?:\/\/\S+)\s*$/);
        if (u && lastItem) lastItem.url = u[1];
      }
    });
    return days;
  }

  // ---------- 渲染：mptcp 近期动态 ----------
  function renderMptcpActivity(days) {
    if (days.length === 0) {
      $("mptcp-activity").innerHTML = '<li class="empty">等待 Actions 首次运行填充</li>';
      return;
    }
    $("mptcp-activity").innerHTML = days.map(function (d) {
      return '<li class="day">' +
        '<div class="day-date">' + escape(d.date) + "</div>" +
        '<ul class="day-items">' +
          d.items.map(function (it) {
            var srcHtml = it.src
              ? '<span class="src src-' + escape(it.src) + '">' + escape(it.src) + "</span>"
              : "";
            var text = escape(it.text);
            if (it.url) text = '<a href="' + escape(it.url) + '" target="_blank" rel="noopener">' + text + "</a>";
            return "<li>" + srcHtml + text + "</li>";
          }).join("") +
        "</ul>" +
      "</li>";
    }).join("");
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
      { url: "data/contributions.md", render: renderHeatmap, parse: parseContribs, target: "heatmap" },
      { url: "data/mptcp-issues.md", render: renderMptcpIssues, parse: parseProjects, target: "mptcp-issues" },
      { url: "data/mptcp-activity.md", render: renderMptcpActivity, parse: parseMptcpActivity, target: "mptcp-activity" }
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
