<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-09-14
- [lore] [PATCH net 2/2] tls: drop duplicate check_app_limited in tls_push_sg — Geliang Tang
  https://lore.kernel.org/mptcp/d98eef55bd417f7166a30a9998a3b34e7f0b229d.1789368148.git.tanggeliang@kylinos.cn/
- [lore] [PATCH bpf 1/2] bpf: drop duplicate check_app_limited in tcp_bpf_push — Geliang Tang
  https://lore.kernel.org/mptcp/f12f1d886c8ff2b6f6e48f797ccc861037eda685.1789368148.git.tanggeliang@kylinos.cn/
- [lore] [PATCH 0/2] Drop redundant tcp_rate_check_app_limited calls — Geliang Tang
  https://lore.kernel.org/mptcp/cover.1789368148.git.tanggeliang@kylinos.cn/

## 2026-09-13
- [lore] Re: [PATCH mptcp-next v5 06/16] mptcp: implement psock_update_sk_prot for sockmap — Matthieu Baerts
  https://lore.kernel.org/mptcp/0a4bbaf9-7cc0-4ec8-b630-261a0b324e86@kernel.org/
- [lore] Re: [PATCH mptcp-next v5 05/16] bpf: drop duplicate check_app_limited in tcp_bpf_push — Matthieu Baerts
  https://lore.kernel.org/mptcp/3b241101-f090-4228-aa8c-b25f61c4aa40@kernel.org/
- [lore] Re: [PATCH net] mptcp: return sk_wait_data() errors from recvmsg() — Matthieu Baerts
  https://lore.kernel.org/mptcp/c5b348cc-bf4c-4015-ab52-d842485a438d@kernel.org/
- [lore] Re: [PATCH net] mptcp: return sk_wait_data() errors from recvmsg() — MPTCP CI
  https://lore.kernel.org/mptcp/eecfc2e1-0719-b588-04b3-ebcfc0a28105@gmail.com/
- [lore] Re: [PATCH mptcp-next v5 00/16] MPTCP sockmap support — MPTCP CI
  https://lore.kernel.org/mptcp/b5f9e8d7-b738-1df6-3b5e-1d54cbbc663c@gmail.com/
- [lore] Re: [PATCH mptcp-next v5 00/16] MPTCP sockmap support — MPTCP CI
  https://lore.kernel.org/mptcp/7d725fbe-154c-d2ff-0886-bbbecb62d749@gmail.com/

## 2026-09-12
- [gh] Issue #634: KCSAN: data-race in `mptcp_cleanup_rbuf` / `mptcp_data_ready`
  https://github.com/multipath-tcp/mptcp_net-next/issues/634

## 2026-09-09
- [gh] Issue #633: `mptcp_connect` unconditionally set `MPTCP_RTX_ENABLED`
  https://github.com/multipath-tcp/mptcp_net-next/issues/633

## 2026-09-04
- [gh] Issue #631: [syzbot] WARNING in mptcp_pm_announced_alloc (2) — still hit after #620 was closed
  https://github.com/multipath-tcp/mptcp_net-next/issues/631

