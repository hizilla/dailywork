<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-08-13
- [lore] Re: [PATCH mptcp-next 0/2] mptcp: MIB counter for invalid option — gang.yan
  https://lore.kernel.org/mptcp/42782d2aaa30cf1328bfea950c5f430eb9c98bd3@linux.dev/

## 2026-08-12
- [lore] Re: [PATCH mptcp-net 0/4] mptcp: a few fixes — Matthieu Baerts
  https://lore.kernel.org/mptcp/cbdf8539-65c0-4bf2-ab43-bf3481b0971f@kernel.org/
- [lore] [mptcp:export-net 1/10] .git_markup: warning: ignored by one of the .gitignore files — kernel test robot
  https://lore.kernel.org/mptcp/202608130227.3MeLtJJN-lkp@intel.com/
- [lore] [PATCH mptcp-net 1/4] mptcp: being below memory limit is a likely() condition — Paolo Abeni
  https://lore.kernel.org/mptcp/93777494d7c03ae68a72357e95b4f54c49addb46.1786553006.git.pabeni@redhat.com/
- [lore] [PATCH mptcp-net 2/4] mptcp: avoid pruning for OoW data — Paolo Abeni
  https://lore.kernel.org/mptcp/1e1fa2d6fb756ab5a88a17c0d6e834f361cb9bdb.1786553006.git.pabeni@redhat.com/
- [lore] [PATCH mptcp-net 4/4] mptcp: do not reschedule the RTX timer for fallback sockets — Paolo Abeni
  https://lore.kernel.org/mptcp/517def06b272a22027775a60334f3f68347510ae.1786553006.git.pabeni@redhat.com/
- [lore] [PATCH mptcp-net 3/4] mptcp: remove unneeded READ_ONCE() annotation — Paolo Abeni
  https://lore.kernel.org/mptcp/d96944a628414e33eea6e52ef5371d71d0e1c7a3.1786553006.git.pabeni@redhat.com/

## 2026-08-07
- [gh] Issue #628: mptcp: incoming options: add a MIB counter for received invalid options
  https://github.com/multipath-tcp/mptcp_net-next/issues/628
- [gh] Issue #627: Fix data-race in `__mptcp_retrans` / `mptcp_incoming_options`
  https://github.com/multipath-tcp/mptcp_net-next/issues/627
- [gh] Issue #626: Use `READ_ONCE()` over sysctls
  https://github.com/multipath-tcp/mptcp_net-next/issues/626
- [gh] Issue #625: Reduce `struct mptcp_options_received` size
  https://github.com/multipath-tcp/mptcp_net-next/issues/625

## 2026-08-05
- [gh] Issue #624: [6.6.y]: warning in `__mptcp_move_skbs_from_subflow`
  https://github.com/multipath-tcp/mptcp_net-next/issues/624

