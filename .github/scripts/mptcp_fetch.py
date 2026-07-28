#!/usr/bin/env python3
"""Fetch MPTCP upstream activity and write data/mptcp-activity.md.

Sources:
  - lore.kernel.org/mptcp atom feed (mailing list threads)
  - GitHub API: multipath-tcp/mptcp_net-next open issues

Output: data/mptcp-activity.md, grouped by date, ready for the static
site's JS to render. No third-party deps, stdlib only.
"""
import json
import ssl
import sys
import urllib.request
from collections import defaultdict
from datetime import datetime, timezone, timedelta
from xml.etree import ElementTree

OUT = "data/mptcp-activity.md"

# public-inbox atom feeds; try in order, first that yields entries wins.
LORE_FEEDS = [
    "https://lore.kernel.org/mptcp/?x=A",
    "https://lore.kernel.org/mptcp/atom/",
    "https://lore.kernel.org/mptcp/new.atom",
]
GH_API = (
    "https://api.github.com/repos/multipath-tcp/mptcp_net-next/issues"
    "?state=open&per_page=20&sort=created&direction=desc"
)
DAYS_KEEP = 14
MAX_PER_DAY = 6
UA = "dailywork-mptcp-tracker/1.0 (https://github.com/hizilla/dailywork)"


def fetch(url, headers=None):
    req = urllib.request.Request(
        url,
        headers=headers or {"User-Agent": UA},
    )
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, timeout=30, context=ctx) as r:
        return r.read().decode("utf-8", errors="replace")


def parse_iso(s):
    s = s.strip()
    if s.endswith("Z"):
        s = s[:-1] + "+00:00"
    try:
        return datetime.fromisoformat(s)
    except Exception:
        try:
            return datetime.strptime(s[:10], "%Y-%m-%d").replace(tzinfo=timezone.utc)
        except Exception:
            return None


def fetch_lore():
    items = []
    ns = {"a": "http://www.w3.org/2005/Atom"}
    for url in LORE_FEEDS:
        try:
            text = fetch(url, {"User-Agent": UA, "Accept": "application/atom+xml,application/xml,*/*"})
        except Exception as e:
            print(f"lore {url} failed: {e}", file=sys.stderr)
            continue
        try:
            root = ElementTree.fromstring(text)
        except Exception as e:
            print(f"lore {url} parse failed: {e}", file=sys.stderr)
            continue
        entries = root.findall("a:entry", ns)
        if not entries:
            print(f"lore {url} no entries", file=sys.stderr)
            continue
        for e in entries:
            title = (e.findtext("a:title", default="", namespaces=ns) or "").strip()
            link = ""
            link_el = e.find("a:link", ns)
            if link_el is not None:
                link = link_el.get("href") or ""
            updated = (e.findtext("a:updated", default="", namespaces=ns) or "").strip()
            author = ""
            ae = e.find("a:author", ns)
            if ae is not None:
                author = (ae.findtext("a:name", default="", namespaces=ns) or "").strip()
            if not title or not updated:
                continue
            dt = parse_iso(updated)
            if dt is None:
                continue
            disp = f"{title} — {author}" if author else title
            items.append((dt, "lore", disp, link))
        if items:
            break
    return items


def fetch_gh():
    items = []
    try:
        text = fetch(GH_API, {"User-Agent": UA, "Accept": "application/vnd.github+json"})
        arr = json.loads(text)
    except Exception as e:
        print(f"gh api failed: {e}", file=sys.stderr)
        return items
    if not isinstance(arr, list):
        print(f"gh api unexpected payload", file=sys.stderr)
        return items
    for it in arr:
        if it.get("pull_request"):
            continue  # issues only, skip PRs
        num = it.get("number")
        title = (it.get("title") or "").strip()
        url = it.get("html_url") or ""
        created = (it.get("created_at") or "").strip()
        dt = parse_iso(created)
        if dt is None:
            continue
        disp = f"Issue #{num}: {title}" if num else title
        items.append((dt, "gh", disp, url))
    return items


def write_md(days):
    lines = [
        "<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->",
        "<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->",
        "<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->",
        "",
    ]
    for day, items in days:
        lines.append(f"## {day}")
        for src, text, url in items:
            lines.append(f"- [{src}] {text}")
            if url:
                lines.append(f"  {url}")
        lines.append("")
    content = "\n".join(lines) + "\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(content)
    total = sum(len(i) for _, i in days)
    print(f"wrote {OUT}: {total} items in {len(days)} days")


def main():
    lore = fetch_lore()
    gh = fetch_gh()
    all_items = lore + gh
    if not all_items:
        print("WARN: no items fetched, writing empty skeleton", file=sys.stderr)
        write_md([])
        return 0

    groups = defaultdict(list)
    for dt, src, text, url in all_items:
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        day = dt.astimezone(timezone.utc).strftime("%Y-%m-%d")
        groups[day].append((src, text, url, dt))

    today = datetime.now(timezone.utc)
    cutoff = today - timedelta(days=DAYS_KEEP)
    days = sorted(
        [d for d in groups if datetime.strptime(d, "%Y-%m-%d").replace(tzinfo=timezone.utc) >= cutoff],
        reverse=True,
    )

    out = []
    for day in days:
        items = sorted(groups[day], key=lambda x: x[3], reverse=True)[:MAX_PER_DAY]
        out.append((day, [(s, t, u) for s, t, u, _ in items]))
    write_md(out)
    return 0


if __name__ == "__main__":
    sys.exit(main())
