<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-08-18
- [lore] Re: [PATCH net-next 00/11] mptcp: misc. features for v7.3 — patchwork-bot+netdevbpf
  https://lore.kernel.org/mptcp/178701362114.1806156.7611412383996379895.git-patchwork-notify@kernel.org/

## 2026-08-17
- [lore] Re: [PATCH mptcp-next 0/3] mptcp: avoid data-races around the sysctls — Matthieu Baerts
  https://lore.kernel.org/mptcp/1a8f1b2a-df80-4257-ae67-5403f93f0a67@kernel.org/
- [lore] Re: [PATCH mptcp-next v3 1/4] mptcp: sched: avoid truncating the pacing rate in the scheduler — sashiko-bot
  https://lore.kernel.org/mptcp/20260817154005.1E1591F000E9@smtp.kernel.org/
- [lore] Re: [PATCH mptcp-next v3 2/4] mptcp: sched: penalise a slow subflow by halving its cwnd — sashiko-bot
  https://lore.kernel.org/mptcp/20260817153914.730781F000E9@smtp.kernel.org/
- [lore] Re: [PATCH mptcp-next v3 3/4] mptcp: sched: do not penalise when receive-window-limited — sashiko-bot
  https://lore.kernel.org/mptcp/20260817153653.73C8A1F00A3A@smtp.kernel.org/
- [lore] Re: [PATCH mptcp-next v3 4/4] mptcp: sched: add penalise counters and tracepoint — sashiko-bot
  https://lore.kernel.org/mptcp/20260817153441.3F7001F00A3A@smtp.kernel.org/
- [lore] Re: [PATCH mptcp-next RFC 3/3] mptcp: pm: kernel: skip operating on closing connections — Matthieu Baerts
  https://lore.kernel.org/mptcp/58c90e83-2cf1-44f2-80fb-1803a9d1af1c@kernel.org/

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

