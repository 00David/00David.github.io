---
title: Autonomous home energy management system
summary: Component-based home energy manager driving appliances and batteries.
code: M2
period: Second master year · 2026–2027
order: 12
tags: [Java, Javassist, JUnit]
homeTags: [Java, Javassist]
draft: false
---

Home energy manager (HEM) controlling a house's appliances, batteries and energy production to balance consumption, built as a component-based architecture, using an academic framework (BCM4Java, Java SE 8).

System:

- Component architecture: appliances, batteries and the energy manager are components linked by ports and connectors.
- Runtime code generation: the connector between the energy manager and each appliance is generated at runtime from an XML descriptor.
- Discrete event simulation (DEVS) of the components, first model-in-the-loop (MIL), then software-in-the-loop (SIL).
- Unit tests per component and integration test scenarios gathering all of them.

Main features:

- Dynamic registration: appliances register to the energy manager at runtime.
- Generic control: the energy manager drives every registered appliance through a single interface.
- Appliances with their own behaviour: toaster, dimmable lamp, washing machine with several programs, temperature-regulated fridge.

<img src="/assets/work-in-progress.png" alt="WORK IN PROGRESS" />
