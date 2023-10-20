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

export const collections = {
  works: worksCollection,
}
