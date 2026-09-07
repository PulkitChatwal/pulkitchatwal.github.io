import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['under-review', 'accepted', 'published', 'in-progress']),
    theme: z.enum([
      'financial-safety',
      'multilingual',
      'multimodal',
      'applied-nlp',
      'ongoing',
    ]),
    venue: z.string().optional(),
    date: z.string().optional(),
    year: z.number().optional(),
    tag: z.string().optional(),
    preprint: z.string().optional(),
    authors: z.array(z.string()).optional(),
    advisor: z.string().optional(),
    summary: z.string(),
    link: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { publications };
