<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-11-18
- [lore] [PATCH mptcp-next v6] mptcp: bpf: fix NULL deref and UAF in bpf_mptcp_sock_from_subflow() — Kalpan Jani
  https://lore.kernel.org/mptcp/20261118084011.4051683-1-kalpan.jani@mpiricsoftware.com/
- [lore] Re: [PATCH net-next v2 0/5] net: annotate data-races around sysctl knobs — MPTCP CI
  https://lore.kernel.org/mptcp/b739e40a-f8df-843c-c125-3100dfac50a6@gmail.com/
- [lore] Re: [PATCH net 3/3] mptcp: exclude MSG_PEEK from receive buffer autotuning — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-220156@kernel.org/
- [lore] Re: [PATCH net 2/3] net: bound receive window predictions before narrowing — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-220155@kernel.org/
- [lore] Re: [PATCH net 1/3] tcp: saturate window-to-memory conversions at INT_MAX — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-220154@kernel.org/
- [lore] [PATCH net-next v2 5/5] net/smc: annotate data-races around smc sysctls — Jiayuan Chen
  https://lore.kernel.org/mptcp/20261118045137.174026-6-jiayuan.chen@linux.dev/

## 2026-11-17
- [lore] Re: [PATCH v2 net-next 7/7] selftest: packetdrill: Add test for tcp_collapse(). — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179495722334.3136.9959346022100767379@kernel.org/
- [lore] Re: [PATCH v2 net-next 5/7] tcp: Allocate all new skb before collapsing. — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179495722211.3136.15241045445062201797@kernel.org/
- [lore] Re: [PATCH v2 net-next 4/7] tcp: Skip collapsing if collapsed skb is less-dense. — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179495722091.3136.1223304567026487070@kernel.org/
- [lore] Re: [PATCH v2 net-next 3/7] tcp: Stop collapsing if not bloated. — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179495721972.3136.4014039511718024400@kernel.org/
- [lore] Re: [PATCH v2 net-next 2/7] tcp: Don't collapse high density skb. — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179495721836.3136.13013697525497561871@kernel.org/
- [lore] Re: [PATCH v2 net-next 4/7] tcp: Skip collapsing if collapsed skb is less-dense. — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-219780@kernel.org/

## 2026-11-12
- [gh] Issue #648: Blocking send() never returns after all subflows died by RTO: msk goes to CLOSE without sk_err or SEND_SHUTDOWN
  https://github.com/multipath-tcp/mptcp_net-next/issues/648
- [gh] Issue #647: Orphaned msk sends MP_FASTCLOSE 60 s after close() while the peer is still reading; the tail of the stream is lost
  https://github.com/multipath-tcp/mptcp_net-next/issues/647

