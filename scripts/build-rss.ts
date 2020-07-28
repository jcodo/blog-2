import fs from 'fs'
import RSS from 'rss'
import getPosts from '../lib/get-posts'

const feed = new RSS({
  title: `Jesse Sibley's Blog`,
  site_url: 'https://jessesibley.com',
  feed_url: 'https://blog.tailwindcss.com/feed.xml',
})

getPosts().forEach(({ title, description, href, published }) => {
  feed.item({
    title,
    description,
    url: `https://jessesibley.com/${href}`,
    date: new Date(published),
    guid: href,
  })
})

fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
