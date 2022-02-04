/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import Youtube from './Youtube'
import Text from './Text'
import Ruby from './Ruby'
import Info from './Info'
import { BlogNewsletterForm } from './NewsletterForm'

export const MDXComponents = {
  Image,
  Info,
  Ruby,
  Youtube,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  h1: function ({ children }) {
    return <Text tag="h1">{children}</Text>
  },
  h2: function ({ children }) {
    return <Text tag="h2">{children}</Text>
  },
  h3: function ({ children }) {
    return <Text tag="h3">{children}</Text>
  },
  h4: function ({ children }) {
    return <Text tag="h4">{children}</Text>
  },
  h5: function ({ children }) {
    return <Text tag="h5">{children}</Text>
  },
  h6: function ({ children }) {
    return <Text tag="h6">{children}</Text>
  },
  p: function ({ children }) {
    return <Text tag="p">{children}</Text>
  },
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
