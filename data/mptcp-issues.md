---
file: net/mptcp/pm_userspace.c
line: 108
title: 给 userspace PM entry 加 refcount
desc: 源码注释明确标注 "TODO: a refcount is needed because the entry can..."，userspace 路径管理 entry 缺少引用计数，潜在 use-after-free 风险
diff: medium
status: open
tags: pm, userspace, refcount, uaf
---

---
file: net/mptcp/sockopt.c
line: 390
title: 支持 SO_ZEROCOPY 选项
desc: 注释明确 "SO_ZEROCOPY is currently unsupported, TODO in sndmsg"，需在发送路径实现 zerocopy 以提升大流量传输性能
diff: hard
status: open
tags: sockopt, zerocopy, performance
---

---
file: net/mptcp/sockopt.c
line: 385
title: 支持 SO_PEEK_OFF 选项
desc: SO_PEEK_OFF 用于 MSG_PEEK 偏移，对 strace/gdb 等调试工具有意义，当前注释标 unsupported
diff: medium
status: open
tags: sockopt, peek, debugging
---

---
file: net/mptcp/sockopt.c
line: 386
title: 支持 SO_MAX_PACING_RATE
desc: 注释 "we must be careful with subflows"，多 subflow 限速需协调调度
diff: hard
status: open
tags: sockopt, pacing, scheduler
---

---
file: net/mptcp/sockopt.c
line: 391
title: 支持 SO_TXTIME 选项
desc: SO_TXTIME 用于基于时间的发送调度（TSN/QoS 场景），当前注释 unsupported
diff: hard
status: open
tags: sockopt, tsn, scheduling
---

---
file: net/mptcp/sockopt.c
line: 387
title: 评估 SO_CNX_ADVICE 支持
desc: 注释 "could possibly be relevant"，需评估对 MPTCP 连接状态通知的意义
diff: easy
status: open
tags: sockopt, evaluation
---

---
file: net/mptcp/sockopt.c
line: 382
title: 评估 SO_ATTACH_REUSEPORT_EBPF
desc: 注释 "as it checks"，需评估与 subflow 多 socket 的交互
diff: medium
status: open
tags: sockopt, ebpf, reuseport
---

---
file: net/mptcp/subflow.c
line: 1016
title: subflow 路径上的 unsupported 功能
desc: subflow.c:1016 注释标记 "currently unsupported"，需结合上下文确认具体功能并评估实现
diff: medium
status: open
tags: subflow, investigation
---
