<!-- 本文件由 .github/workflows/mptcp-tracker.yml 每日自动填充 -->
<!-- 数据源：lore.kernel.org/mptcp 邮件列表 + GitHub multipath-tcp/mptcp_net-next 仓库 -->
<!-- 请勿手动编辑，会被下次 Actions 运行覆盖 -->

## 2026-08-08
- [lore] [PATCH mptcp-next v2 7/7] selftests: mptcp: sockopt: check app_limited — Geliang Tang
  https://lore.kernel.org/mptcp/eea01f063ef8f0d1451b03a1c9e53480eb7f1240.1786158416.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v2 6/7] mptcp: track app-limited state in mptcp_sendmsg — Geliang Tang
  https://lore.kernel.org/mptcp/6a71c0f76003d8f7448e304e40ff52f8299719c2.1786158416.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v2 5/7] mptcp: defer read_sock cleanup to mptcp_worker — Geliang Tang
  https://lore.kernel.org/mptcp/5e4f8fc57d5adaf1948ea5963efb7b0a7f7addd5.1786158416.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v2 4/7] mptcp: sync mptcp skb cb layout with tcp one — Geliang Tang
  https://lore.kernel.org/mptcp/209b2afabab1a65e32434be55b1cc58f6d418e18.1786158416.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v2 3/7] mptcp: remove CB offset field — Geliang Tang
  https://lore.kernel.org/mptcp/82755649ec9afe65471a4ff77ca4896d1b90e9cd.1786158416.git.tanggeliang@kylinos.cn/
- [lore] [PATCH mptcp-next v2 2/7] mptcp: drop the cant_coalesce CB field — Geliang Tang
  https://lore.kernel.org/mptcp/89a9667ea7980b7cf8ba479424818aad447b0ce6.1786158416.git.tanggeliang@kylinos.cn/

## 2026-08-07
- [lore] [Weekly meetings] MoM - 17th of June 2026 — Matthieu Baerts
  https://lore.kernel.org/mptcp/c4348f04-b680-4637-8edb-8fce0ade9c3c@kernel.org/
- [gh] Issue #628: mptcp: incoming options: add a MIB counter for received invalid options
  https://github.com/multipath-tcp/mptcp_net-next/issues/628
- [gh] Issue #627: Fix data-race in `__mptcp_retrans` / `mptcp_incoming_options`
  https://github.com/multipath-tcp/mptcp_net-next/issues/627
- [gh] Issue #626: Use `READ_ONCE()` over sysctls
  https://github.com/multipath-tcp/mptcp_net-next/issues/626
- [lore] [Weekly meetings] MoM - 21st of May 2026 — Matthieu Baerts
  https://lore.kernel.org/mptcp/1cecb443-cc27-4bb0-966c-52af48df58d5@kernel.org/
- [lore] [Weekly meetings] MoM - 6th of May 2026 — Matthieu Baerts
  https://lore.kernel.org/mptcp/b10096fb-96f7-4b5d-a836-8746f0f18c6f@kernel.org/

## 2026-08-05
- [gh] Issue #624: [6.6.y]: warning in `__mptcp_move_skbs_from_subflow`
  https://github.com/multipath-tcp/mptcp_net-next/issues/624

