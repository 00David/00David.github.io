import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "project" entries live in src/content/project/*.md
// Each file's `id` is derived from its filename, e.g. issue.md -> "issue",
// which becomes the URL at /project/issue.
const project = defineCollection({
    loader: glob({ base: './src/content/project', pattern: '**/*.md' }),
    schema: z
        .object({
            title: z.string(),
            summary: z.string().max(160),
            // Short badge shown in listings, e.g. "M1", "L3".
            code: z.string(),
            // Full academic period shown on the project page, e.g.
            // "First master year · 2025–2026".
            period: z.string(),
            // Sort key, descending: the biggest 'order' is the most recent project.
            order: z.number(),
            tags: z.array(z.string()).default([]),
            // Shorter tag list for listings. Left out, it falls back to `tags`
            // in the transform below, so it is always an array downstream.
            homeTags: z.array(z.string()).optional(),
            url: z.url().optional(),
            repo: z.url().optional(),
            draft: z.boolean().default(false),
        })
        .transform((data) => ({
            ...data,
            homeTags: data.homeTags ?? data.tags,
        })),
});

export const collections = { project };
