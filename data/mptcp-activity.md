<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-08-17
- [lore] Re: [PATCH mptcp-next 0/3] mptcp: avoid data-races around the sysctls — MPTCP CI
  https://lore.kernel.org/mptcp/955ed682-e1b5-0579-300c-e147565ec711@gmail.com/
- [lore] [PATCH mptcp-next 3/3] mptcp: use READ_ONCE() over sysctls — Gang Yan
  https://lore.kernel.org/mptcp/20260817012452.7519-4-gang.yan@linux.dev/
- [lore] [PATCH mptcp-next 2/3] mptcp: pm: change path_manager sysctl atomically — Gang Yan
  https://lore.kernel.org/mptcp/20260817012452.7519-3-gang.yan@linux.dev/
- [lore] [PATCH mptcp-next 1/3] mptcp: sched: change scheduler sysctl atomically — Gang Yan
  https://lore.kernel.org/mptcp/20260817012452.7519-2-gang.yan@linux.dev/
- [lore] [PATCH mptcp-next 0/3] mptcp: avoid data-races around the sysctls — Gang Yan
  https://lore.kernel.org/mptcp/20260817012452.7519-1-gang.yan@linux.dev/

## 2026-08-16
- [lore] Re: [PATCH net] mptcp: fix uninitialized local_id in syncookie MP_JOIN reconstruction — Matthieu Baerts
  https://lore.kernel.org/mptcp/4e9b815b-d116-4a34-b88d-297f3270d7f3@kernel.org/
- [lore] Re: [PATCH mptcp-next RFC 2/3] mptcp: reject MP_JOIN earlier — Matthieu Baerts
  https://lore.kernel.org/mptcp/68ead427-6c15-49f3-8ed6-64383fdda680@kernel.org/
- [lore] Re: [PATCH mptcp-next RFC 2/3] mptcp: reject MP_JOIN earlier — Matthieu Baerts
  https://lore.kernel.org/mptcp/687bd2da-28b5-4753-b942-d18cb53d9239@kernel.org/
- [lore] Re: [PATCH RFC mptcp-next v2 0/4] mptcp: sched: penalise a slow subflow — Matthieu Baerts
  https://lore.kernel.org/mptcp/bf0fd380-8b2f-479c-a00d-02827986459f@kernel.org/
- [lore] Re: [PATCH mptcp-next v3 0/7] Reduce the differences between TCP and MPTCP for TLS usage — Matthieu Baerts
  https://lore.kernel.org/mptcp/39bf35ef-85d0-4d02-ba54-689260316124@kernel.org/
- [lore] Re: [PATCH net] mptcp: fix uninitialized local_id in syncookie MP_JOIN reconstruction — sashiko-bot
  https://lore.kernel.org/mptcp/20260816115228.04C361F000E9@smtp.kernel.org/

## 2026-08-15
- [lore] Re: [PATCH mptcp-net v2] selftests: mptcp: fix an UAF in mptcp_connect.c — Matthieu Baerts
  https://lore.kernel.org/mptcp/c17bbe71-e267-41ea-bb6e-78f5439df30f@kernel.org/
- [lore] Re: [PATCH mptcp-net v2] mptcp: options: handle MPC data + csum reqd + no csum — Matthieu Baerts
  https://lore.kernel.org/mptcp/29304df9-a7e7-4585-aecb-b3ae701ee5bb@kernel.org/
- [lore] Re: [PATCH mptcp-net] mptcp: pm: reset retrans_time when ADD_ADDR entry is reused — Matthieu Baerts
  https://lore.kernel.org/mptcp/ffb6d0ba-172b-4227-b13d-73b532928890@kernel.org/
- [lore] Re: [PATCH resend mptcp-net 0/4] mptcp: a few fixes — Matthieu Baerts
  https://lore.kernel.org/mptcp/ccf9480a-712d-4d37-80f1-3db80b7a4409@kernel.org/

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

