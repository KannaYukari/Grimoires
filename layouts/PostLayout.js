import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import TimeToRead from '@/components/TimeToRead'
import Clock from '@/components/inlineSvg/Clock'
import Text from '@/components/Text'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    siteMetadata.siteUrl + '/blog/' + slug
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, cover } = frontMatter
  const header = (
    <>
      {cover && (
        <div className="absolute bottom-0 w-full h-44 blur-2xl bg-white/50 dark:bg-gray-900/70" />
      )}
      <div class={cover && 'absolute bottom-0 pb-4 pl-4 w-full'}>
        <PageTitle>{title}</PageTitle>
        <ul className="text-black dark:text-white">
          <li className="float-right mr-8">
            Escrito por{' '}
            <ul>
              {authorDetails.map((author) => (
                <li className="flex flex-row items-center space-x-4" key={author.name}>
                  {author.avatar && (
                    <Image
                      src={author.avatar}
                      width="38px"
                      height="38px"
                      alt="avatar"
                      className="w-10 h-10 rounded-full "
                    />
                  )}
                  <div className="flex-1 whitespace-nowrap text-sm font-medium leading-5">
                    <span className="text-gray-900 dark:text-gray-100">{author.name}</span>
                    <div>
                      {author.twitter && (
                        <Link
                          href={author.twitter}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {author.twitter.replace('https://twitter.com/', '@')}
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <time dateTime={date} className="uppercase text-xs">
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </li>
          <li>
            <span className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <Clock />
            </span>
            <TimeToRead {...frontMatter.readingTime}></TimeToRead>
          </li>
          {tags && (
            <li>
              <span className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </span>
            </li>
          )}
        </ul>
      </div>
    </>
  )

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            {cover ? (
              <div
                className="
              relative mx-auto aspect-video bg-gray-500
              w-[225px] h-[126.56px] 
              sm:w-[360px] sm:h-[202.50px] 
              md:w-[533.33px] md:h-[300px] 
              lg:w-[640px] lg:h-[360px] 
              xl:w-[768px] xl:h-[432px] 
              2xl:w-[1024px] 2xl:h-[576px]"
              >
                <img src={cover} alt="Capa da postagem" width="1280" height="720" />

                {header}
              </div>
            ) : (
              header
            )}
          </header>
          <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:gap-x-6">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
              <div className="text-center pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer className="flex items-center gap-x-1 justify-around py-4 px-4">
              {prev && (
                <div>
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Postagem anterior
                  </h2>
                  <div className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                  </div>
                </div>
              )}
              <div>
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Voltar para página inicial
                </Link>
              </div>
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Próxima postagem
                  </h2>
                  <div className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                  </div>
                </div>
              )}
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
