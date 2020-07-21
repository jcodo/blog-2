interface Link {
  href: string
  label: string
}

const links: Link[] = [
  {
    href: '/rss.xml',
    label: 'RSS',
  },
  {
    href: 'https://github.com/chickencoder/blog',
    label: 'View Source',
  },
]

export default function Footer() {
  return (
    <footer className="max-w-2xl sm:container mx-auto px-4 mt-16">
      <div className="border-t py-8">
        <ul className="flex space-x-8">
          {links.map((link, index) => (
            <li key={index} className="text-gray-600 hover:text-gray-800">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
