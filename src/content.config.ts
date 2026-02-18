import { defineCollection } from "astro:content";

import {glob, file} from 'astro/loaders';
import {z} from 'astro/zod';

const resumeCollection = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/resume/experience'}),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        start_date: z.string(),
        end_date: z.string()
    }),
});

export const collections = {
    resume: resumeCollection,
};