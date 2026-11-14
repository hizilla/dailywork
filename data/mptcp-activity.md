<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-11-14
- [lore] Re: [PATCH mptcp-net 27/34] tcp: do not pass a BPF reqsk to an MPTCP listener — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-213944@kernel.org/
- [lore] Re: [PATCH mptcp-net 26/34] mptcp: don't send a FIN before the pending data on fallback — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-213924@kernel.org/

## 2026-11-13
- [lore] Re: [PATCH mptcp-net 25/34] mptcp: push queued data on passive TFO subflows falling back to TCP — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-213884@kernel.org/
- [lore] Re: [PATCH mptcp-net 20/34] mptcp: stop resending data to a peer that fell back — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-213841@kernel.org/
- [lore] Re: [PATCH mptcp-net 19/34] mptcp: do not fallback while old data is in flight — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-213809@kernel.org/
- [lore] Re: [PATCH mptcp-net 00/34] mptcp: misc fixes — MPTCP CI
  https://lore.kernel.org/mptcp/2c25d512-2944-ffd4-a43f-cddd97e08bbe@gmail.com/
- [lore] Re: [PATCH mptcp-net 15/34] mptcp: close a subflow reset for a bad mapping — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-213730@kernel.org/
- [lore] Re: [PATCH mptcp-net 10/34] mptcp: don't leak an orphan when the PM closes its last subflow — sashiko-bot
  https://lore.kernel.org/mptcp/sashiko-outbox-213692@kernel.org/

## 2026-11-12
- [gh] Issue #648: Blocking send() never returns after all subflows died by RTO: msk goes to CLOSE without sk_err or SEND_SHUTDOWN
  https://github.com/multipath-tcp/mptcp_net-next/issues/648
- [gh] Issue #647: Orphaned msk sends MP_FASTCLOSE 60 s after close() while the peer is still reading; the tail of the stream is lost
  https://github.com/multipath-tcp/mptcp_net-next/issues/647

