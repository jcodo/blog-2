import Link from 'next/link'

interface PostPreview {
  title: string
  href: string
}

interface PreviewProps {
  post: PostPreview
}

export default function Preview({ post }: PreviewProps) {
  return (
    <article>
      <a>{post.title}</a>
      <Link href={post.href}>
        <a>Read More</a>
      </Link>
    </article>
  )
}
