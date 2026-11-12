<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-11-12
- [gh] Issue #648: Blocking send() never returns after all subflows died by RTO: msk goes to CLOSE without sk_err or SEND_SHUTDOWN
  https://github.com/multipath-tcp/mptcp_net-next/issues/648
- [gh] Issue #647: Orphaned msk sends MP_FASTCLOSE 60 s after close() while the peer is still reading; the tail of the stream is lost
  https://github.com/multipath-tcp/mptcp_net-next/issues/647
- [lore] Re: [PATCH net 2/2] mptcp: avoid wrapping blackhole timeout — gang.yan
  https://lore.kernel.org/mptcp/a5e30ae63ebb4a71327031211b50b33230e50004@linux.dev/
- [lore] Re: [PATCH net 1/2] tcp: avoid wrapping Fast Open blackhole timeout — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/avVX-3s3AYwtxQe7@google.com/
- [lore] Re: [PATCH mptcp-next v25 8/8] mptcp: defer read_sock cleanup to mptcp_worker — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179445957978.488855.18074378536120470954@kernel.org/
- [lore] Re: [PATCH mptcp-next v25 7/8] mptcp: sync mptcp skb cb layout with tcp one — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179445957892.488855.11648346256985509007@kernel.org/

## 2026-11-11
- [lore] Re: [PATCH iproute2-net v2] mptcp: limits: fix JSON support — patchwork-bot+netdevbpf
  https://lore.kernel.org/mptcp/179435580518.128546.9097595420555036368.git-patchwork-notify@kernel.org/

## 2026-11-10
- [lore] Re: [PATCH mptcp-next v24 8/8] mptcp: defer read_sock cleanup to mptcp_worker — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179435354437.488855.2718889717172311369@kernel.org/
- [lore] Re: [PATCH mptcp-next v24 7/8] mptcp: sync mptcp skb cb layout with tcp one — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179435354363.488855.16913226200081069114@kernel.org/
- [lore] Re: [PATCH mptcp-next v24 6/8] mptcp: remove CB offset field — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179435354289.488855.15751733174603885935@kernel.org/
- [lore] Re: [PATCH mptcp-next v24 2/8] selftests: mptcp: connect: check TFO SIOCINQ overflow — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179435354208.488855.15120241187558911095@kernel.org/
- [lore] Re: [PATCH mptcp-net v24 1/8] mptcp: fix TFO SIOCINQ overflow in mptcp_inq_hint — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179435354125.488855.3194775514742361661@kernel.org/
- [lore] Re: [PATCH net] mptcp: reject DATA_ACKs against a reversed send interval — Matthieu Baerts
  https://lore.kernel.org/mptcp/8eab68bb-9886-4990-bcdd-bfe0f0496045@kernel.org/

