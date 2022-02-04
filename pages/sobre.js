import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const projectDetails = await getFileBySlug('', ['projectDetails'])
  return { props: { authorDetails, projectDetails } }
}

export default function About({ authorDetails, projectDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  frontMatter.projectDetails = projectDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
