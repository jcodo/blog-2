import Head from 'next/head'
import Header from '../components/header'
import Subscribe from '../components/subscribe'
import { getSlugFromPath } from '../lib/get-posts'

interface PostFrontMatter {
  title: string
  description: string
  published: string
  __resourcePath: string
}

export default function Layout(frontMatter: PostFrontMatter) {
  return ({ children: content }) => (
    <>
      <Head>
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.description} />
        <meta
          name="og:url"
          content={`https://jessesibley.com/${getSlugFromPath(
            frontMatter.__resourcePath
          )}`}
        />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={frontMatter.title} />
        <meta name="og:description" content={frontMatter.description} />
        <meta name="description" content={frontMatter.description} />
      </Head>
      <Header />
      <article className="px-4 container sm:max-w-2xl mx-auto mt-8">
        <header>
          <h1 className="font-black text-4xl md:text-4xl mb-2">
            {frontMatter.title}
          </h1>
          <p className="flex items-center text-gray-600 mb-8">
            <span>Published {frontMatter.published}</span>
          </p>
        </header>
        <section className="prose prose-lg border-b border-gray-200 pb-8 mb-8">
          {content}
        </section>
        <Subscribe />
      </article>
    </>
  )
}
