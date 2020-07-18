import Link from 'next/link'

const links = [
  { href: '/', label: 'About' },
  { href: 'https://github.com/chickencoder', label: 'GitHub' },
  { href: 'https://twitter.com', label: 'Twitter' },
]

export default function Menu() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <ul className="flex justify-between items-center space-x-3">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="transition duration-200 ease-in-out px-4 py-2 hover:bg-gray-200 rounded"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
