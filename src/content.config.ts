import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    pubDate: z.date(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    mediaFolder: z.string().optional(),
    heroFit: z.string().optional(),
    demoMode: z.boolean().optional(),
  }),
});

export const collections = { projects };
