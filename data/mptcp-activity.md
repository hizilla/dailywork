<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-11-20
- [lore] Re: [PATCH net-next v3 3/3] mptcp: limit blackhole_timeout to one day — Matthieu Baerts
  https://lore.kernel.org/mptcp/38afe45e-7c7d-4b91-9436-020ded6ca6fc@kernel.org/
- [lore] Re: [PATCH net-next v3 2/3] mptcp: avoid wrapping blackhole timeout — Matthieu Baerts
  https://lore.kernel.org/mptcp/cff77c51-64d1-4cc0-9da3-41832d3015b5@kernel.org/
- [lore] Re: [PATCH net-next v3 1/3] tcp: avoid wrapping Fast Open blackhole timeout — Matthieu Baerts
  https://lore.kernel.org/mptcp/656870cc-3a3b-433c-ba8a-dc883c4fb414@kernel.org/
- [lore] Re: [PATCH mptcp-next v29 7/8] mptcp: sync mptcp skb cb layout with tcp one — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179520011363.3133.7044883277405636164@kernel.org/
- [lore] Re: [PATCH mptcp-next v29 6/8] mptcp: remove CB offset field — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179520011242.3133.5608778876652732838@kernel.org/
- [lore] Re: [PATCH mptcp-next v29 5/8] mptcp: encapsulate CB DSN field access with helpers — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179520011112.3133.14475010950011269195@kernel.org/

## 2026-11-12
- [gh] Issue #648: Blocking send() never returns after all subflows died by RTO: msk goes to CLOSE without sk_err or SEND_SHUTDOWN
  https://github.com/multipath-tcp/mptcp_net-next/issues/648
- [gh] Issue #647: Orphaned msk sends MP_FASTCLOSE 60 s after close() while the peer is still reading; the tail of the stream is lost
  https://github.com/multipath-tcp/mptcp_net-next/issues/647

