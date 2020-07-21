import Link from 'next/link'
import Anchor from '../components/anchor'

const links = [
  {
    href: '/',
    label: 'Home',
    external: false,
  },
  {
    href: '/blog',
    label: 'Blog',
    external: false,
  },
  {
    href: 'https://github.com/chickencoder/',
    label: 'GitHub',
    external: true,
  },
  {
    href: 'https://twitter.com/jessethesibley/',
    label: 'Twitter',
    external: true,
  },
]

export default function Nav() {
  return (
    <nav className="container mx-auto px-4">
      <div className="py-8 border-b border-gray-200 flex items-center justify-between">
        <Link href="/">
          <a className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full"></a>
        </Link>
        <ul className="flex space-x-4 sm:space-x-8">
          {links.map((link, index) => (
            <li key={index}>
              <Anchor
                href={link.href}
                external={link.external}
                className="font-medium hover:text-gray-900 text-gray-600"
              >
                {link.label}
              </Anchor>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
