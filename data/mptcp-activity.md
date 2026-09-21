<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-09-20
- [lore] Re: Patch "mptcp: annotate data-races around subflow->fully_established" has been added to the 6.12-stable tree — Matthieu Baerts
  https://lore.kernel.org/mptcp/569ae222-2073-4565-a445-bcfcd7059a06@kernel.org/
- [lore] Re: [PATCH 6.12.y v2 0/3] mptcp: fix recent failed backports (20260919) — Greg KH
  https://lore.kernel.org/mptcp/2026092050-wisplike-trustful-6c97@gregkh/
- [lore] Re: Patch "mptcp: annotate data-races around subflow->fully_established" has been added to the 6.12-stable tree — Greg KH
  https://lore.kernel.org/mptcp/2026092026-throwback-iron-bdce@gregkh/
- [lore] [PATCH 6.12.y v2 3/3] mptcp: fix bad accounting in __mptcp_subflow_push_pending() — Matthieu Baerts (NGI0)
  https://lore.kernel.org/mptcp/20260920094135.2431797-8-matttbe@kernel.org/
- [lore] [PATCH 6.12.y v2 2/3] mptcp: close race between scheduler and state change — Matthieu Baerts (NGI0)
  https://lore.kernel.org/mptcp/20260920094135.2431797-7-matttbe@kernel.org/
- [lore] [PATCH 6.12.y v2 1/3] mptcp: avoid unneeded actions on subflow reset — Matthieu Baerts (NGI0)
  https://lore.kernel.org/mptcp/20260920094135.2431797-6-matttbe@kernel.org/

## 2026-09-12
- [gh] Issue #634: KCSAN: data-race in `mptcp_cleanup_rbuf` / `mptcp_data_ready`
  https://github.com/multipath-tcp/mptcp_net-next/issues/634

## 2026-09-09
- [gh] Issue #633: `mptcp_connect` unconditionally set `MPTCP_RTX_ENABLED`
  https://github.com/multipath-tcp/mptcp_net-next/issues/633

