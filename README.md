# GitHub profile pages

My personal project portfolio, built with [Astro](https://astro.build). It replaces the
Markdown profile README I used before, giving each project its own page.

## Content

Projects live in `src/content/project/` — one Markdown file per project, validated by the
Zod schema in `src/content.config.ts`. To add one, drop in a new file:

```yaml
---
title: Project name
summary: One sentence, 160 characters max.
code: M1 # short badge shown in listings
period: First master year · 2025–2026
order: 10 # sort key, descending — the biggest number is the most recent
tags: [Python, Flask]
url: https://example.org # optional, live site
repo: https://github.com/... # optional, source code
featured: false
draft: false
---
```

The filename becomes the URL: `issue.md` is served at `/project/issue`.

Site-wide copy (name, tagline, links) lives in `src/site.config.ts`.

## Demonstration clips

Demos are H.264 MP4 files served as-is from `public/assets/<year>/`, embedded from Markdown
with raw HTML so they autoplay and loop the way the original GIFs did:

```html
<video controls autoplay loop muted playsinline preload="metadata" aria-label="What the clip shows">
    <source src="/assets/m1/demo-ldc.mp4" type="video/mp4" />
</video>
```

`muted` is what makes autoplay permitted at all, `playsinline` stops iOS from going
fullscreen, and `controls` leaves the native player visible so a clip can be paused or
scrubbed. Sizing and borders come from the `.prose :where(video)` rule in
`src/styles/global.css`, so no classes are needed on the tag.

To add one, convert the recording with [ffmpeg](https://ffmpeg.org):

```bash
ffmpeg -i demo.gif -vf "scale=1280:-2:flags=lanczos" \
  -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart -an demo.mp4
```

## Commands

Run from the project root:

| Command        | Action                                             |
| -------------- | -------------------------------------------------- |
| `pnpm install` | Install dependencies                               |
| `pnpm dev`     | Start the local dev server                         |
| `pnpm build`   | Type-check, then build for production to `./dist/` |
| `pnpm preview` | Preview the production build locally               |
| `pnpm check`   | Run `astro check` only                             |
| `pnpm format`  | Format the project with Prettier                   |

The package manager is pinned through the `packageManager` field in `package.json`, so
[Corepack](https://nodejs.org/api/corepack.html) resolves the right pnpm version by itself.
