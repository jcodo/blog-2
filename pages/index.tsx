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
      <main className="max-w-2xl mx-auto px-4 text-gray-800 leading-loose">
        <article className="text-lg mb-8">
          <p className="mb-4">
            I'm a <b>Full Stack Developer</b> based in <b>London, UK</b>. I'm
            interested in building and marketing digital products and exploring
            creativity in software ✨
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://twitter.com/jessethesibley"
                rel="noopener"
                target="_blank"
                className="underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chickencoder"
                rel="noopener"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </article>
        <article className="mb-8">
          <h3 className="font-bold text-2xl">Recent Articles</h3>
          <ul className="list-disc list-inside underline text-lg">
            {posts.map((post, index) => (
              <li key={index}>
                <Link href={post.href}>
                  <a className="underline">{post.title}</a>
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
