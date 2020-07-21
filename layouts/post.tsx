export default function Layout(frontMatter) {
  return ({ children: content }) => (
    <div>
      <article className="px-4 max-w-2xl mx-auto mt-12">
        <header>
          <h1 className="font-black text-3xl md:text-4xl mb-4">
            {frontMatter.title}
          </h1>
          <p className="flex items-center text-gray-600 mb-8">
            <span>Published {frontMatter.published}</span>
          </p>
        </header>
        <section className="prose prose-lg">{content}</section>
      </article>
    </div>
  )
}
