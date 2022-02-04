import SectionContainer from '@/components/SectionContainer'

export default function rawLayout({ frontMatter, children }) {
    const { date, title } = frontMatter
  
    return (
      <SectionContainer>
        {children}
      </SectionContainer>
    )
  }