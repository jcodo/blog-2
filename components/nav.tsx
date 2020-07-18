import Link from 'next/link'
import Menu from './menu'

export default function Nav() {
  return (
    <nav className="lg:container max-w-3xl mx-auto px-4 flex items-center justify-between mb-8">
      <Link href="/">
        <a className="w-10 h-10 bg-gray-300 rounded-full" />
      </Link>
      <Menu />
    </nav>
  )
}
