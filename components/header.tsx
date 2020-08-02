import Link from 'next/link'
import Anchor from '../components/anchor'
import * as Fathom from 'fathom-client'

const links = [
  {
    href: '/',
    label: 'About',
    external: false,
    goal: 'UKOHHMQA',
  },
  {
    href: 'https://twitter.com/jessethesibley/',
    goal: '1VTG1C9E',
    label: 'Twitter',
    external: true,
  },
  {
    href: 'https://github.com/chickencoder/',
    goal: '3F9IGMSH',
    label: 'GitHub',
    external: true,
  },
]

const clickAvatarGoal = 'G5RRYH5E'

export default function Header() {
  return (
    <nav className="max-w-2xl mx-auto p-4 pt-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a
            onClick={() => Fathom.trackGoal(clickAvatarGoal, 0)}
            className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full"
          >
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
                onClick={() => link.goal && Fathom.trackGoal(link.goal, 0)}
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
