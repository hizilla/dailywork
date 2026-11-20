<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-11-20
- [lore] Re: [PATCH net 0/7] mptcp: misc fixes for v7.4-rc4 — Matthieu Baerts
  https://lore.kernel.org/mptcp/7be30913-ab2c-4aef-b7e8-5a250b4eedf0@kernel.org/
- [lore] Re: [PATCH net 3/3] mptcp: exclude MSG_PEEK from receive buffer autotuning — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179516297471.3136.7019370824354358240@kernel.org/
- [lore] Re: [PATCH net 2/3] net: bound receive window predictions before narrowing — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179516297347.3136.13553293180683672285@kernel.org/
- [lore] Re: [PATCH net 1/3] tcp: saturate window-to-memory conversions at INT_MAX — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179516297210.3136.8495911905614638988@kernel.org/
- [lore] Re: [PATCH net 3/3] mptcp: exclude MSG_PEEK from receive buffer autotuning — Lin Lei
  https://lore.kernel.org/mptcp/20261120080558.2866468-1-llleigoing@gmail.com/
- [lore] Re: [PATCH net v2] mptcp: exclude MSG_PEEK from receive buffer autotuning — netdev-bot+sinfo
  https://lore.kernel.org/mptcp/179516143562.3291.17266753897945843390@kernel.org/

## 2026-11-19
- [lore] Re: [PATCH mptcp-next v6] mptcp: bpf: fix NULL deref and UAF in bpf_mptcp_sock_from_subflow() — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179512721473.3133.14387325104477927814@kernel.org/
- [lore] Re: [PATCH mptcp-net] mptcp: gate diag sequence counters on CAP_NET_ADMIN — MPTCP CI
  https://lore.kernel.org/mptcp/8aeb11a0-4c69-38a6-283d-10d6c0f1e7f5@gmail.com/
- [lore] Re: [PATCH v3 net-next 5/7] tcp: Allocate all new skb before collapsing. — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/av9U9w4wGpO7HmDY@google.com/
- [lore] [PATCH mptcp-net] mptcp: gate diag sequence counters on CAP_NET_ADMIN — Dominik Maier
  https://lore.kernel.org/mptcp/20261119192159.2646113-1-dmnk@google.com/
- [lore] Re: [PATCH mptcp-next v3] selftests: mptcp: print stats before socket closure — Matthieu Baerts
  https://lore.kernel.org/mptcp/74cf0906-cc11-4cdb-8997-af79bb21231f@kernel.org/
- [lore] Re: [PATCH mptcp-net v2] mptcp: fix use-after-free of the subflow context on the delegated list — Matthieu Baerts
  https://lore.kernel.org/mptcp/4e209707-bdc4-415a-923b-4ac1d2006ecf@kernel.org/

## 2026-11-12
- [gh] Issue #648: Blocking send() never returns after all subflows died by RTO: msk goes to CLOSE without sk_err or SEND_SHUTDOWN
  https://github.com/multipath-tcp/mptcp_net-next/issues/648
- [gh] Issue #647: Orphaned msk sends MP_FASTCLOSE 60 s after close() while the peer is still reading; the tail of the stream is lost
  https://github.com/multipath-tcp/mptcp_net-next/issues/647

