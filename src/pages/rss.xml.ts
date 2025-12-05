import rss from '@astrojs/rss'
import { getCollection, type CollectionEntry } from 'astro:content'
import { HOME } from '../consts'

type Context = {
  site: string
}

type FeedItem =
  | CollectionEntry<'writing'>
  | CollectionEntry<'projects'>
  | CollectionEntry<'thought'>

export async function GET(context: Context) {
  const writing = (await getCollection('writing')).filter(
    (item: CollectionEntry<'writing'>) => !item.data.draft,
  )

  const projects = (await getCollection('projects')).filter(
    (item: CollectionEntry<'projects'>) => !item.data.draft,
  )

  const thought = (await getCollection('thought')).filter(
    (item: CollectionEntry<'thought'>) => !item.data.draft,
  )

  const items: FeedItem[] = [...writing, ...projects, ...thought].sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  )

  return rss({
    title: "Kane's RSS Feed",
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item: FeedItem) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: new URL(
        `/${item.collection}/${item.slug}/`,
        context.site,
      ).toString(),
    })),
  })
}
