---
title: Minimal Publish-Subscribe system
summary: Distributed, multi-threaded publish-subscribe system built with components, applied to weather stations and wind turbines.
code: M1
period: First master year · 2025–2026
order: 8
tags: [Java, Java RMI, JUnit]
homeTags: [Java, Java RMI]
repo: https://github.com/00David/AltF4_CPS
draft: false
---

Component-based publish-subscribe system, built with an academic framework (BCM4Java, Java SE 8) and applied to a weather application.

System:

- Publish/subscribe: a broker manages channels; weather clients (stations, bureaus, wind turbines) publish messages or subscribe with a filter.
- Distributed execution: brokers run in separate JVMs, connected through Java RMI and synchronised by a gossip protocol.
- Multi-threaded components: brokers run with several dedicated thread pools.

Main features:

- Composable message filters: on property values, on several properties jointly, and on timestamps.
- Service classes: FREE, STANDARD or PREMIUM registration, with different privileges and performances.
- Privileged clients:
    - create, restrict (regex on client URIs) and destroy channels, within a quota.
    - advanced asynchronous reception.
- Weather application: stations publish winds, bureaus publish alerts, wind turbines orient themselves or switch to safe mode.

Demonstration component deployment architecture:

<img src="/assets/m1/architecture-publish-subscribe.png" alt="Deployment architecture of the distributed demonstration: 5 brokers in separate JVMs and their weather clients" loading="lazy" />

<video controls autoplay loop muted playsinline preload="metadata" aria-label="Demonstration of the publish-subscribe system">
    <source src="/assets/m1/demo-publish-subscribe.mp4" type="video/mp4" />
</video>
