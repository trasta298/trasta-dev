import { z, defineCollection } from 'astro:content'

const worksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().refine((img) => img.width >= 800, {
      message: "カバー画像は幅800ピクセル以上でなければなりません！",
    }),
    date: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  works: worksCollection,
}
