import { getCollection, type CollectionEntry } from 'astro:content'
import fs from 'fs'
import path from 'path'
import { ImageResponse } from '@vercel/og'

// https://www.kozhuhds.com/blog/generating-static-open-graph-og-images-in-astro-using-vercel-og

interface Props {
  params: { slug: string }
  props: { post: CollectionEntry<'blog'> }
}

export async function GET({ props }: Props) {
  const { post } = props

  const NotoSansJPBold = fs.readFileSync(
    path.resolve('./public/fonts/NotoSansJP-Bold.ttf')
  )
  const NotoSansJPReqular = fs.readFileSync(
    path.resolve('./public/fonts/NotoSansJP-Regular.ttf')
  )

  const t28ProfileBase64 = fs.readFileSync(
    path.resolve('./public/favicon.png'),
    { encoding: 'base64' }
  )
  const t28ProfileDataUrl = `data:image/png;base64,${t28ProfileBase64}`

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            tw: 'pl-10 shrink flex',
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '52px',
                    fontFamily: 'Noto Sans JP Bold',
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'absolute right-[80px] bottom-[40px] flex items-center h-24',
            children: [
              {
                type: 'img',
                props: {
                  src: t28ProfileDataUrl,
                  tw: 'w-20 h-20 rounded-full mr-6',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'text-4xl',
                  style: {
                    fontFamily: 'Noto Sans JP Bold',
                  },
                  children: 'trasta',
                },
              },
            ],
          },
        },
      ],
      tw: 'w-full h-full flex items-center justify-center relative px-22',
      style: {
        background: '#fafafa',
        fontFamily: 'Noto Sans JP Regular',
      },
    },
  }

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Noto Sans JP Bold',
        data: NotoSansJPBold.buffer,
        style: 'normal',
      },
      {
        name: 'Noto Sans JP Regular',
        data: NotoSansJPReqular.buffer,
        style: 'normal',
      },
    ],
  })
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection('blog')
  return blogPosts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }))
}
