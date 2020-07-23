import Header from '../components/header'
import Subscribe from '../components/subscribe'

export default function Layout(frontMatter) {
  return ({ children: content }) => (
    <>
      <Header />
      <article className="px-4 container sm:max-w-2xl mx-auto mt-8">
        <header>
          <h1 className="font-black text-3xl md:text-4xl mb-4">
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
