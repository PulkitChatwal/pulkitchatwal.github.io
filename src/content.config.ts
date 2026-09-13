import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    status: z.enum([
      'under-review',
      'manuscript-ready',
      'accepted',
      'published',
      'in-progress',
    ]),
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
    // Optional teaser figure: filename inside src/assets/papers/, plus a caption.
    figure: z.string().optional(),
    figureCaption: z.string().optional(),
    // True when the caption is already rendered inside the image file,
    // in which case it is used as alt text only and not printed again.
    figureCaptionInImage: z.boolean().optional(),
    // Optional inline results table, rendered as real text (not an image).
    resultsCaption: z.string().optional(),
    resultsColumns: z.array(z.string()).optional(),
    resultsRows: z.array(z.array(z.string())).optional(),
    authors: z.array(z.string()).optional(),
    advisor: z.string().optional(),
    summary: z.string(),
    link: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { publications };
