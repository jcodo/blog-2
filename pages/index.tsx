import Head from 'next/head'
import Link from 'next/link'
import Subscribe from '../components/subscribe'
import getPosts from '../lib/get-posts'

const posts = getPosts()

export default function Index() {
  return (
    <>
      <Head>
        <title>Jesse Sibley's Blog</title>
      </Head>
      <header className="max-w-2xl mx-auto px-4 mt-16 mb-8 text-center">
        <img src="" />
        <h1 className="title font-black text-4xl tracking-tight">
          Hey, I'm Jesse
        </h1>
      </header>
      <main className="max-w-2xl mx-auto px-4">
        <article className="prose prose-lg mb-8">
          <p>
            I'm a <b>Full Stack Developer</b> based in <b>London, UK</b>. I'm
            interested in building and marketing digital products and exploring
            creativity in software ✨
          </p>
          <p>You can find me on...</p>
          <ul>
            <li>
              <a
                href="https://twitter.com/jessethesibley"
                rel="noopener"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chickencoder"
                rel="noopener"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </article>
        <article className="prose prose-lg mb-16">
          <h3>Recent Articles</h3>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <Link href={post.href}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <Subscribe />
      </main>
    </>
  )
}
