import SectionContainer from '@/components/SectionContainer'

export default function ExampleLayout({ frontMatter, children }) {
    const { date, title } = frontMatter
  
    return (
      <SectionContainer>
        <div>{date}</div>
        <h1>{title}</h1>
        <div>{children}</div>
      </SectionContainer>
    )
  }