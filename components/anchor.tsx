import Link from 'next/link'

interface AnchorProps {
  className?: string
  external: boolean
  href: string
}

const Anchor: React.FC<AnchorProps> = ({
  external = false,
  href,
  children,
  className,
}) => {
  return external ? (
    <a href={href} className={className} target="_blank" rel="noopener">
      {children}
    </a>
  ) : (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default Anchor
