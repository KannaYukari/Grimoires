import SectionContainer from '@/components/SectionContainer'
import siteMetadata, { comment } from '@/data/siteMetadata'
import Text from '@/components/Text'
import { BlogSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Comments from '@/components/comments'

export default function ExampleLayout({ frontMatter, children, authorDetails, next, prev }) {
  const { slug, date, title } = frontMatter
  const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <Text tag="p" display="h6" align="center">
        ────────────⊹⊱✫⊰⊹────────────
      </Text>
      <Text tag="h1" display="h2" align="center">
        {title}
      </Text>
      {/* <Text tag='p' display='h6' align='center'>☆゜・。。・゜゜・。。・゜★</Text> */}
      <Text tag="p" display="h6" align="center">
        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
      </Text>
      <br />
      <Text tag="p" display="h6" align="center">
        ────────────⊹⊱✫⊰⊹────────────
      </Text>
      <br />
      <span style={{ fontFamily: 'Cedarville cursive' }}>
        <Text tag="span" align="center">
          {children}
        </Text>
        <Text tag="p" align="right" underline>
          {authorDetails[0].name}
        </Text>
      </span>
      <hr className="mt-8 mb-4" />
      <Comments frontMatter={frontMatter} />
      <footer>
        <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
          {prev && (
            <div className="pt-4 xl:pt-8">
              <Link
                href={`/blog/${prev.slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                &larr; {prev.title}
              </Link>
            </div>
          )}
          {next && (
            <div className="pt-4 xl:pt-8">
              <Link
                href={`/blog/${next.slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {next.title} &rarr;
              </Link>
            </div>
          )}
        </div>
      </footer>
    </SectionContainer>
  )
}
