// @ts-ignore
import { frontMatter as posts } from '../pages/**/*.mdx'

export default function getPosts() {
  return posts.map((post) => {
    post.href = post.__resourcePath.split('/')[0]
    return post
  })
}
