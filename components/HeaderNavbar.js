import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const linkStyle = 'p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'
function getNavbar() {
  return headerNavLinks.map((link) => (
    <Link key={link.title} href={link.href} className={linkStyle}>
      {link.title}
    </Link>
  ))
}

export default function HeaderNavbar() {
  return <div className="hidden sm:block">{getNavbar()}</div>
}
