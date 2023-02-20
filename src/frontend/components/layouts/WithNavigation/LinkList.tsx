import Link from 'next/link'

const LINKS = [
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Portfolio' },
  { href: '/about', label: 'About' }
]

export default function LinkList() {
  return (
    <ul className="flex gap-4">
      {LINKS.map(({ href, label }) => (
        <li key={href}>
          <Link className="leading-4" href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}
