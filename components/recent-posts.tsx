import { frontMatter as posts } from '../pages/**/*.mdx'
import Preview from './preview'

export default function RecentPosts() {
  return (
    <ul>
      {posts.map((post, index) => {
        post.href = post.__resourcePath.split('/')[0]
        return (
          <li key={index}>
            <Preview post={post} />
          </li>
        )
      })}
    </ul>
  )
}
