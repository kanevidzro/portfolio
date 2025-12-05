import { getCollection } from 'astro:content'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import fs from 'fs/promises'
import type { APIRoute } from 'astro'
import { getOgImage } from '../../components/OgImage'

// Disable prerendering so this dynamic route works
export const prerender = false

// Load fonts
const regular = await fs.readFile('src/assets/Inter-Regular.ttf')
const bold = await fs.readFile('src/assets/Inter-Bold.ttf')

// Read and convert logo SVG to Base64
const logoFile = await fs.readFile('public/assets/kanev.svg', 'utf-8')
const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoFile).toString('base64')}`

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params

  // Fetch the post by slug
  const writings = await getCollection('writing')
  const writing = writings.find((p) => p.slug === slug)

  const thoughts = await getCollection('thought')
  const thought = thoughts.find((p) => p.slug === slug)

  const post = writing || thought

  if (!post) return new Response('Post not found', { status: 404 })

  // Generate SVG with Satori
  const svg = await satori(getOgImage({ post, logoUrl: logoBase64 }), {
    width: 1280,
    height: 640,
    fonts: [
      { name: 'Inter', weight: 400, data: regular },
      { name: 'Inter', weight: 700, data: bold },
    ],
  })

  // Convert SVG to PNG with Resvg
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1280 } })
  const buffer = resvg.render().asPng()

  // Wrap Node Buffer in Uint8Array for Response
  return new Response(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
