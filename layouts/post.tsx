import Nav from '../components/nav'

export default function Layout(frontMatter) {
  return ({ children: content }) => (
    <div className="py-8">
      <Nav />
      <article className="px-4 max-w-2xl mx-auto">
        <header>
          <h1 className="font-black text-4xl mb-4">{frontMatter.title}</h1>
          <p className="font-heading text-gray-600 mb-8">
            Published {frontMatter.published}
          </p>
        </header>
        <section className="prose lg:prose-xl">{content}</section>
      </article>
    </div>
  )
}
