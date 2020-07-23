// @ts-ignore
import { frontMatter as posts } from '../pages/**/*.mdx'

export function getSlugFromPath(path: string): string {
  return path.split('/')[0].replace(/\.mdx$/, '')
}

export default function getPosts() {
  return posts.map((post) => {
    post.href = getSlugFromPath(post.__resourcePath)
    return post
  })
}
