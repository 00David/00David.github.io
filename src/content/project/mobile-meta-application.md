---
title: Mobile meta-application
summary: Mobile application dynamically configured by a JSON, avoiding mobile store re-publication
code: M2
period: Second master year · 2026–2027
order: 13
tags: [Dart, Flutter, Firebase, Python, MCP, GitHub Actions]
homeTags: [Flutter, Firebase, Python, MCP]
draft: false
---

Single mobile application for [Event Catalyst](https://www.eventcatalyst.com), a modular event management SaaS. Each event's app is generated at runtime from a JSON configuration published by Event Catalyst, so organizers can reshape their app without any store re-publication (software product line approach).

Main features:

- JSON configuration: project metadata, events, themes, logos, splash screen, menus and enabled modules.
- Modular core: one module = one feature, each one enabled or disabled per event.
- Authentication, notifications and analytics, built on Event Catalyst's APIs and Firebase.
- MCP server letting an AI agent generate or edit valid JSON configurations.

<img src="/assets/work-in-progress.png" alt="WORK IN PROGRESS" />
