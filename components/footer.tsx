interface Link {
  href: string
  label: string
}

const links: Link[] = [
  {
    href: '/feed.xml',
    label: 'RSS',
  },
  {
    href: 'https://github.com/chickencoder/blog',
    label: 'View Source',
  },
]

export default function Footer() {
  return (
    <footer className="text-gray-600 max-w-2xl mx-auto px-4 py-8 mt-8 text-sm flex items-center justify-between">
      <p>PS. You are loved &hearts;</p>
      <ul className="flex space-x-8">
        {links.map((link, index) => (
          <li key={index} className="hover:text-gray-800">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
