---
title: ImageJ/Fiji lipid droplets characterization plugin
summary: A Fiji plugin chaining ImageJ tools into a complete treatment pipeline for lipid droplet images.
code: M1
period: First master year · 2025–2026
order: 10
tags: [Java, Swing, Maven, SciJava, JUnit, GitHub Actions]
homeTags: [Java, Swing, GitHub Actions]
repo: https://github.com/FattaccioliLab/lipid-droplets-characterization
draft: false
---

Plugin using existing ImageJ tools to allow completing a whole treatment pipeline on droplet images.

Main features:

- Preprocessing, with contrast enhancement and/or median filter application on an image.
- Manual or automatic thresholding according to an existing method, producing a binary mask.
- Morphological operations on a binary mask.
- Particle analysis, with .csv and diagram exports.
- Different interactive tools to visualize and help at each workflow step.
- Parameters export/import as JSON.
- Batch mode.

<video controls autoplay loop muted playsinline preload="metadata" aria-label="Demonstration of the lipid droplets characterization plugin">
    <source src="/assets/m1/demo-ldc.mp4" type="video/mp4" />
</video>
