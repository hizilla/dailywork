<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-10-19
- [lore] mptcp: poll(POLLIN) on a listening MPTCP socket never wakes when a connection is queued — Leonardo Souza Silva
  https://lore.kernel.org/mptcp/ROAP284MB16279B4CA8731943D0006042BD982@ROAP284MB1627.BRAP284.PROD.OUTLOOK.COM/
- [lore] Re: [PATCH mptcp-next v3 2/2] mptcp: kunit: add sockopt test — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-176559@kernel.org/
- [lore] [PATCH mptcp-next v3 2/2] mptcp: kunit: add sockopt test — Geliang Tang
  https://lore.kernel.org/mptcp/398dbbf2562050831dae08e0a9058df6b91e575e.1792378794.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v3 1/2] mptcp: give MPTCP sockets a distinct lockdep class — Geliang Tang
  https://lore.kernel.org/mptcp/9e27a6113a67e5d5f3af6193f8d20c7c8cd45cd9.1792378794.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v3 0/2] add distinct lockdep class for MPTCP sockets — Geliang Tang
  https://lore.kernel.org/mptcp/cover.1792378794.git.tanggeliang@kylinos.cn/
- [lore] Re: [PATCH mptcp-net] selftests: mptcp: sockopt: echo until EOF on partial reads — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179236894433.3133.2023724514413325674@kernel.org/

## 2026-10-18
- [lore] Re: [PATCH mptcp-next v5 7/7] selftests: mptcp: join: validate subflow retry after link failure — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179230196601.3133.2242694314991271561@kernel.org/
- [lore] Re: [PATCH mptcp-next v5 6/7] selftests: mptcp: pm_nl_ctl: support the subflow-retries limit — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179230196529.3133.6142254982525099118@kernel.org/
- [lore] Re: [PATCH mptcp-next v5 5/7] mptcp: pm: in-kernel: retry subflows closed after an error — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179230196449.3133.4238470005815011879@kernel.org/
- [lore] Re: [PATCH mptcp-next v5 4/7] mptcp: pm: in-kernel: add the subflow-retries limit — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179230196371.3133.8705467098989676424@kernel.org/
- [lore] Re: [PATCH mptcp-next v5 3/7] netlink: specs: mptcp: add the subflow-retries attribute — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179230196294.3133.3154846340684241967@kernel.org/
- [lore] Re: [PATCH mptcp-next v6 4/6] mptcp: pm: in-kernel: retry subflows closed after an error — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-175939@kernel.org/

## 2026-10-17
- [lore] Re: [PATCH mptcp-next v4 3/3] selftests: mptcp: join: validate subflow retry after link failure — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179227123722.3133.10646334827815358929@kernel.org/
- [lore] Re: [PATCH mptcp-next v4 2/3] mptcp: pm: kernel: retry subflows closed after an error — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179227123648.3133.5320047924383519432@kernel.org/
- [lore] Re: [PATCH mptcp-next v4 1/3] selftests: mptcp: connect: retry write() on EAGAIN — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179227123571.3133.16573987329985425813@kernel.org/
- [lore] Re: [PATCH mptcp-next v2 2/2] mptcp: kunit: add sockopt test for subflow socket locking — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179225804350.3133.12494514393089653943@kernel.org/
- [lore] Re: [PATCH mptcp-next v2 1/2] mptcp: give MPTCP sockets a distinct lockdep class — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179225804264.3133.5374808777837243575@kernel.org/
- [lore] [PATCH mptcp-net] mptcp: push pending data after a sendmsg copy fault — Quanye Yang via B4 Relay
  https://lore.kernel.org/mptcp/20261017-fix-mptcp-issue-640-v1-1-50a7bace7d43@proton.me/

## 2026-10-16
- [gh] Issue #641: [syzbot] WARNING in `__mptcp_move_skbs_from_subflow` (3)
  https://github.com/multipath-tcp/mptcp_net-next/issues/641

## 2026-10-13
- [gh] Issue #640: mptcp: pending data stranded on copy failure in `mptcp_sendmsg()`
  https://github.com/multipath-tcp/mptcp_net-next/issues/640
- [gh] Issue #639: selftests: mptcp: deadlock in `process_one_client()` on partial read
  https://github.com/multipath-tcp/mptcp_net-next/issues/639
- [gh] Issue #638: selftests: mptcp: incorrect expected byte count in `connect_one_server()`
  https://github.com/multipath-tcp/mptcp_net-next/issues/638
- [gh] Issue #637: selftests: mptcp: unreachable code in `connect_one_server()`
  https://github.com/multipath-tcp/mptcp_net-next/issues/637
- [gh] Issue #636: selftests: mptcp: out-of-bounds read in `copyfd_io_poll()`
  https://github.com/multipath-tcp/mptcp_net-next/issues/636

