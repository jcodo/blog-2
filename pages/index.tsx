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
      <header className="max-w-2xl mx-auto px-4 pt-16 mb-8 flex flex-col sm:flex-row items-center space-y-8 space-x-0 sm:space-y-0 sm:space-x-8">
        <aside className="flex-shrink-0">
          <img
            alt="A picture of me"
            className="w-40 sm:w-48 rounded-full mx-auto"
            src={require('../public/avatar.jpg?resize&size=280')}
          />
        </aside>
        <section>
          <h1 className="title font-black text-4xl tracking-tight mb-4">
            Hey, I'm Jesse
          </h1>
          <p className="text-lg mb-4">
            I'm a <b>Full Stack Developer</b> based in <b>London, UK</b>. I'm
            interested in building products for humans ✨
          </p>
          <p className="text-lg">
            I also live over at {` `}
            <a
              href="https://twitter.com/jessethesibley"
              rel="noopener"
              className="underline"
              tabIndex={0}
            >
              Twitter
            </a>
            {` and `}
            <a
              href="https://github.com/chickencoder"
              rel="noopener"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </header>
      <main className="max-w-2xl mx-auto px-4 text-gray-800 leading-loose">
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
