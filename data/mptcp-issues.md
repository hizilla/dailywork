---
file: net/mptcp/pm_userspace.c
line: 108
cat: bug
title: userspace PM entry 缺 refcount
desc: 源码注释明确 "TODO: a refcount is needed because the entry can..."，entry 缺少引用计数，并发访问下潜在 use-after-free。建议引入 per-entry kref + RCU 释放。
diff: medium
status: open
tags: pm, userspace, refcount, uaf
---

---
file: net/mptcp/options.c
line: 975
cat: bug
title: 异常 MPC 选项只告警不计数
desc: 收到 established client sk 上的 bogus mpc 选项时仅 pr_warn_once 后 fallback，未走 MIB 计数，运维难统计触发频率。建议补一个 MPTCP_MIB 计数并暴露给 mptcp_diag。
diff: easy
status: open
tags: options, diagnostics, mib
---

---
file: net/mptcp/pm_netlink.c
line: 323
cat: bug
title: 不该到达路径 WARN_ON_ONCE(1) 未带诊断信息
desc: 多处 WARN_ON_ONCE(1) 无附加信息，触发后难定位根因。建议改成 WARN_ON_ONCE(condition) 带具体条件或加 rate-limit + 打印相关 msk/subflow 指针。
diff: easy
status: open
tags: pm, netlink, diagnostics
---

---
file: net/mptcp/subflow.c
line: 1016
cat: feature-gap
title: subflow 路径标记的 unsupported 功能
desc: 注释明确 "currently unsupported"，需结合上下文确认是哪项能力（疑似 subflow 切换/优先级相关），评估实现成本与收益。
diff: medium
status: open
tags: subflow, investigation
---

---
file: net/mptcp/sockopt.c
line: 377
cat: feature-gap
title: SO_OOBINLINE 未支持
desc: 注释标 "let's avoid the related mess"，OOB 数据在 MPTCP 上语义模糊。建议明确拒绝并返回 ENOPROTOOPT 而非静默忽略，便于应用层感知。
diff: easy
status: open
tags: sockopt, oob
---

---
file: net/mptcp/sockopt.c
line: 382
cat: feature-gap
title: 评估 SO_ATTACH_REUSEPORT_EBPF
desc: 注释 "as it checks"，需评估 eBPF reuseport 与多 subflow socket 的交互，给出明确支持或拒绝方案。
diff: medium
status: open
tags: sockopt, ebpf, reuseport
---

---
file: net/mptcp/sockopt.c
line: 385
cat: feature-gap
title: 支持 SO_PEEK_OFF
desc: SO_PEEK_OFF 用于 MSG_PEEK 偏移，strace/gdb 等调试工具依赖它。当前注释标 unsupported，实现后可改善可调试性。
diff: medium
status: open
tags: sockopt, peek, debugging
---

---
file: net/mptcp/sockopt.c
line: 386
cat: feature-gap
title: 支持 SO_MAX_PACING_RATE
desc: 注释 "we must be careful with subflows"，多 subflow 限速需协调调度器。实现后可做 per-subflow 限速策略。
diff: hard
status: open
tags: sockopt, pacing, scheduler
---

---
file: net/mptcp/sockopt.c
line: 387
cat: feature-gap
title: 评估 SO_CNX_ADVICE
desc: 注释 "could possibly be relevant"，需评估对 MPTCP 连接状态通知（如 lossy link 提示）的意义，决定支持或明确拒绝。
diff: easy
status: open
tags: sockopt, evaluation
---

---
file: net/mptcp/sockopt.c
line: 390
cat: feature-gap
title: 支持 SO_ZEROCOPY
desc: 注释 "currently unsupported, TODO in sndmsg"，需在发送路径实现 zerocopy 以提升大流量传输性能，对存储/CDN 场景收益显著。
diff: hard
status: open
tags: sockopt, zerocopy, performance
---

---
file: net/mptcp/sockopt.c
line: 391
cat: feature-gap
title: 支持 SO_TXTIME
desc: SO_TXTIME 用于基于时间的发送调度（TSN/QoS 场景），当前 unsupported。实现后可支撑时间敏感网络场景。
diff: hard
status: open
tags: sockopt, tsn, scheduling
---

---
file: net/mptcp/sockopt.c
line: 479
cat: feature-gap
title: IP_OPTIONS 不支持
desc: 注释 "needs subflow care"，IP 选项需在所有 subflow 上一致传递。需设计 subflow-aware 的 IP 选项传播机制。
diff: medium
status: open
tags: sockopt, ip-options
---

---
file: net/mptcp/sockopt.c
line: 583
cat: feature-gap
title: TCP_MD5SIG 不支持
desc: 注释 "MD5 is not compatible with MPTCP"，需明确文档化拒绝原因（MPTCP 选项与 MD5 选项 TCP 选项空间冲突），避免应用误用。
diff: easy
status: open
tags: sockopt, md5, docs
---

---
file: net/mptcp/sockopt.c
line: 586
cat: feature-gap
title: TCP_REPAIR_WINDOW 不支持
desc: 注释 "better avoid this mess"，repair 系列用于 checkpoint restore。可评估是否为容器迁移场景提供有限支持。
diff: medium
status: open
tags: sockopt, repair, checkpoint
---

---
file: Documentation/networking/mptcp-sysctl.rst
line: 1
cat: doc-gap
title: sysctl 文档与 ctrl.c 实现同步
desc: 需对照 net/mptcp/ctrl.c 中所有 proc sysctl（如 syn_retrans_before_tcp_fallback、enabled 等）是否在 mptcp-sysctl.rst 中描述齐全，补齐缺失项并加默认值/含义说明。
diff: easy
status: open
tags: docs, sysctl
---

---
file: net/mptcp/token_test.c
line: 1
cat: test-gap
title: 单元测试覆盖范围有限
desc: net/mptcp 下仅 crypto_test.c 与 token_test.c 两个 KUnit 单元测试，覆盖面窄。建议为 pm_userspace entry 生命周期、sockopt 边界、sched 选择策略补充 KUnit 用例。
diff: medium
status: open
tags: test, kunit, coverage
---
