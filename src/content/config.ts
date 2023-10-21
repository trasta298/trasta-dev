import { z, defineCollection } from 'astro:content'

const worksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image(),
    date: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})

const blogCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    emoji: z.string(),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  works: worksCollection,
  blog: blogCollection,
}
