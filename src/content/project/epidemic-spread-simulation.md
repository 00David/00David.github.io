---
title: Epidemic spread simulation modeling
summary: A spatial take on the SEIR model, placing each individual on a grid where movement can be restricted.
code: L1
period: First bachelor year · 2022–2023
order: 2
tags: [Python, tkinter, matplotlib]
homeTags: [Python, tkinter]
repo: https://github.com/are-dynamic-2023-g3/epidemie
draft: false
---

A simulation of an epidemic spreading, inspired by the SEIR model (S: Susceptible, E: Exposed, I: Infectious, R: Recovered). Each individual is represented as a case in a grid, and has one of the SEIR states.

Main features:

- Implementation of the SEIR model, with its associated parameters.
- Addition of a spatial dimension to the initial SEIR model, by placing individuals in a world (grid).
- Individuals can move, or have their movements restricted by lockdowns.
- A simulation mode: it provides more statistics and offers a direct comparison between the original SEIR model and our spatial implementation.

<video controls autoplay loop muted playsinline preload="metadata" aria-label="Demonstration of the epidemic spread simulation">
    <source src="/assets/l1/demo-epidemy.mp4" type="video/mp4" />
</video>
