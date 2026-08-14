<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-08-14
- [lore] Re: [RFC PATCH mptcp-next] mptcp: annotate data-races around sysctl reads — gang.yan
  https://lore.kernel.org/mptcp/44897d3c50a4ce9db11d52c19382a2c9f648a62c@linux.dev/
- [lore] Re: [PATCH mptcp-net v3] mptcp: pm: userspace: unify entry free path via RCU callback — Mat Martineau
  https://lore.kernel.org/mptcp/1b5233fb-f3bd-36f5-5438-a10a16a14ec8@kernel.org/
- [lore] [RFC PATCH mptcp-next] mptcp: annotate data-races around sysctl reads — Tao Cui
  https://lore.kernel.org/mptcp/20260814032749.2222975-1-cui.tao@linux.dev/
- [lore] Re: [PATCH export v3 2/4] mptcp: reject joins after fallback in mptcp_is_fully_established — gang.yan
  https://lore.kernel.org/mptcp/3c9241d11965180046042f4c6079ebb1e38b54dd@linux.dev/
- [lore] Re: [PATCH mptcp-net v2] mptcp: options: handle MPC data + csum reqd + no csum — Mat Martineau
  https://lore.kernel.org/mptcp/20f3ef05-aebd-84b0-55a6-8ed35c79d07b@kernel.org/
- [lore] Re: [PATCH mptcp-net] mptcp: pm: reset retrans_time when ADD_ADDR entry is reused — Mat Martineau
  https://lore.kernel.org/mptcp/caa3dce5-940c-8068-8069-93bc3ac7896a@kernel.org/

## 2026-08-13
- [lore] Re: [PATCH export v3 2/4] mptcp: reject joins after fallback in mptcp_is_fully_established — Matthieu Baerts
  https://lore.kernel.org/mptcp/d7269e8a-b9a5-4a93-ab4e-92d677fef09b@kernel.org/
- [lore] Re: [PATCH export v3 2/4] mptcp: reject joins after fallback in mptcp_is_fully_established — Matthieu Baerts
  https://lore.kernel.org/mptcp/db6bd87f-f7cd-4b02-a471-db549cbca384@kernel.org/
- [lore] Re: [PATCH net-next 02/11] mptcp: remove unused data_ack from struct mptcp_ext — sashiko-bot
  https://lore.kernel.org/mptcp/20260813145634.20BB31F000E9@smtp.kernel.org/
- [lore] Re: [PATCH mptcp-next] mptcp: fix add_addr_accepted accounting on subflow close — MPTCP CI
  https://lore.kernel.org/mptcp/64517ba3-2c94-2f36-d8f8-1d5bdb9f3ee5@gmail.com/
- [lore] Re: [PATCH mptcp-next] mptcp: fix add_addr_accepted accounting on subflow close — MPTCP CI
  https://lore.kernel.org/mptcp/711fe5ff-f6d9-20d9-e5df-2fed1c0e90f7@gmail.com/
- [lore] Re: [PATCH mptcp-next] mptcp: fix add_addr_accepted accounting on subflow close — sashiko-bot
  https://lore.kernel.org/mptcp/20260813125358.CBCD51F000E9@smtp.kernel.org/

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

