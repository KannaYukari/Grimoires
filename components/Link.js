/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const Class = 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400';

  if (isInternalLink) {
    return (
      <Link href={href} className={Class}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} className={Class} {...rest} />
  }

  return <a target="_blank" className={Class} rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
