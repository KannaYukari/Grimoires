export default function Ruby({ reading, expression }) {
  let index = 0
  return (
    <>
      {reading.split(' ').map((text) => {
        let ruby = (
          <ruby key={text + index}>
            {expression.split('/')[index]}
            <rp>(</rp>
            <rt>{text}</rt>
            <rp>)</rp>
          </ruby>
        )
        index++
        return ruby
      })}
    </>
  )
}
