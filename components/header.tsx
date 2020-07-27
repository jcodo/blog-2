import Link from 'next/link'
import Anchor from '../components/anchor'

const links = [
  {
    href: '/',
    label: 'About',
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

export default function Header() {
  return (
    <nav className="max-w-2xl mx-auto p-4 pt-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full">
            <img
              alt="A picture of me"
              className="w-16 rounded-full"
              src={require('../public/avatar.jpg?resize&size=280')}
            />
          </a>
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
