export default function Layout(frontMatter) {
    return (({children: content}) => (
        <div className="p-8">
            <article>
                <header>
                    <h1 className="font-black text-4xl mb-4">{frontMatter.title}</h1>
                    <p className="mb-8">{frontMatter.date}</p>
                </header>
                <section className="prose lg:prose-xl">{content}</section>
            </article>
        </div>
    ))
}