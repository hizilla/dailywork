<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-11-17
- [lore] Re: [PATCH net v4 3/3] net: mptcp: verify the token slot in mptcp_token_iter_next() — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179490863464.3133.2064838572417107624@kernel.org/
- [lore] Re: [PATCH net v4 2/3] net: mptcp: reject token 0 in mptcp_token_get_sock() — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179490863332.3133.3484259413562043053@kernel.org/
- [lore] Re: [PATCH net v4 1/3] net: mptcp: take token lookup references with acquire ordering — netdev-bot+sashiko
  https://lore.kernel.org/mptcp/179490863184.3133.11284908359551272618@kernel.org/
- [lore] Re: [PATCH net 0/3] tcp, mptcp: fix receive buffer sizing and peek accounting — MPTCP CI
  https://lore.kernel.org/mptcp/8811c9b7-dbbc-1931-0d30-eb35cd11a872@gmail.com/
- [lore] Re: [PATCH mptcp-net v13] mptcp: hide sequence numbers in Netlink diagnostics — MPTCP CI
  https://lore.kernel.org/mptcp/91ad8bb4-6bd1-5eee-8c58-0bff9364ea65@gmail.com/
- [lore] Re: [PATCH net v5 2/3] net: mptcp: reject token 0 in mptcp_token_get_sock() — kernel test robot
  https://lore.kernel.org/mptcp/202611171407.G0WgWRA6-lkp@intel.com/

## 2026-11-16
- [lore] [PATCH v2 net-next 7/7] selftest: packetdrill: Add test for tcp_collapse(). — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/20261116230555.2305867-8-kuniyu@google.com/
- [lore] [PATCH v2 net-next 6/7] tcp: Batch memory accounting in tcp_collapse(). — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/20261116230555.2305867-7-kuniyu@google.com/
- [lore] [PATCH v2 net-next 5/7] tcp: Allocate all new skb before collapsing. — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/20261116230555.2305867-6-kuniyu@google.com/
- [lore] [PATCH v2 net-next 4/7] tcp: Skip collapsing if collapsed skb is less-dense. — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/20261116230555.2305867-5-kuniyu@google.com/
- [lore] [PATCH v2 net-next 3/7] tcp: Stop collapsing if not bloated. — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/20261116230555.2305867-4-kuniyu@google.com/
- [lore] [PATCH v2 net-next 2/7] tcp: Don't collapse high density skb. — Kuniyuki Iwashima
  https://lore.kernel.org/mptcp/20261116230555.2305867-3-kuniyu@google.com/

## 2026-11-12
- [gh] Issue #648: Blocking send() never returns after all subflows died by RTO: msk goes to CLOSE without sk_err or SEND_SHUTDOWN
  https://github.com/multipath-tcp/mptcp_net-next/issues/648
- [gh] Issue #647: Orphaned msk sends MP_FASTCLOSE 60 s after close() while the peer is still reading; the tail of the stream is lost
  https://github.com/multipath-tcp/mptcp_net-next/issues/647

