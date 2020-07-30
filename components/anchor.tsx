import Link from 'next/link'

interface AnchorProps {
  className?: string
  external: boolean
  href: string
  onClick: any
}

const Anchor: React.FC<AnchorProps> = ({
  external = false,
  href,
  children,
  className,
  onClick,
}) => {
  return external ? (
    <a
      href={href}
      onClick={onClick}
      className={className}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  ) : (
    <Link href={href}>
      <a onClick={onClick} className={className}>
        {children}
      </a>
    </Link>
  )
}

export default Anchor
