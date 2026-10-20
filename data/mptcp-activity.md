<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-10-20
- [lore] [PATCH mptcp-next v4 3/3] mptcp: kunit: add sockopt test — Geliang Tang
  https://lore.kernel.org/mptcp/fdd33ceda25e9c54bf9c38c999034af7d6a6f08e.1792470313.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v4 2/3] mptcp: inherit sk_reuse and fix dev bind override — Geliang Tang
  https://lore.kernel.org/mptcp/4adf96455e63a35be3228434cfe2ba79ea99bcb0.1792470313.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v4 1/3] mptcp: give MPTCP sockets a distinct lockdep class — Geliang Tang
  https://lore.kernel.org/mptcp/57a28e59a137afcf8a5dd8b220037cd753a61591.1792470313.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v4 0/3] add distinct lockdep class for MPTCP sockets — Geliang Tang
  https://lore.kernel.org/mptcp/cover.1792470313.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v7 6/6] selftests: mptcp: join: validate subflow retry after link failure — Anil Kaushik
  https://lore.kernel.org/mptcp/20261020031711.1896660-7-anilkaushikwireless@gmail.com/
- [lore] [PATCH mptcp-next v7 5/6] selftests: mptcp: pm_nl_ctl: support the subflow-retries limit — Anil Kaushik
  https://lore.kernel.org/mptcp/20261020031711.1896660-6-anilkaushikwireless@gmail.com/

## 2026-10-19
- [lore] Re: [PATCH 6.1.y] mptcp: move the OoO check back into __mptcp_try_fallback() — Sasha Levin
  https://lore.kernel.org/mptcp/2026-10-19-1-daily-reply-0012-mptcp-ooo-fallback-6-1@kernel.org/
- [lore] Re: [PATCH 6.6.y] mptcp: move the OoO check back into __mptcp_try_fallback() — Sasha Levin
  https://lore.kernel.org/mptcp/2026-10-19-1-daily-reply-0011-mptcp-ooo-fallback-6-6@kernel.org/
- [lore] Re: [PATCH 6.12.y] mptcp: move the OoO check back into __mptcp_try_fallback() — Sasha Levin
  https://lore.kernel.org/mptcp/2026-10-19-1-daily-reply-0010-mptcp-ooo-fallback-6-12@kernel.org/
- [lore] [PATCH mptcp-net v4 2/2] selftests: mptcp: join: re-add the initial subflow endp with fullmesh — Abdul Wasey
  https://lore.kernel.org/mptcp/20261019190558.465270-3-w453y.me@gmail.com/
- [lore] [PATCH mptcp-net v4 1/2] mptcp: pm: in-kernel: fullmesh: skip closed subflows — Abdul Wasey
  https://lore.kernel.org/mptcp/20261019190558.465270-2-w453y.me@gmail.com/
- [lore] [PATCH mptcp-net v4 0/2] mptcp: pm: in-kernel: fullmesh: re-add of the initial subflow endp — Abdul Wasey
  https://lore.kernel.org/mptcp/20261019190558.465270-1-w453y.me@gmail.com/

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

