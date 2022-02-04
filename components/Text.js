export default function Text({
  id,
  display,
  font,
  italic,
  align,
  color,
  mark,
  wordBreak,
  size,
  tag,
  underline,
  children,
}) {
  const tagText = {
    h1(text, style, id) {
      return (
        <h1 id={id} className={style}>
          {text}
        </h1>
      )
    },
    h2(text, style, id) {
      return (
        <h2 id={id} className={style}>
          {text}
        </h2>
      )
    },
    h3(text, style, id) {
      return (
        <h3 id={id} className={style}>
          {text}
        </h3>
      )
    },
    h4(text, style, id) {
      return (
        <h4 id={id} className={style}>
          {text}
        </h4>
      )
    },
    h5(text, style, id) {
      return (
        <h5 id={id} className={style}>
          {text}
        </h5>
      )
    },
    h6(text, style, id) {
      return (
        <h6 id={id} className={style}>
          {text}
        </h6>
      )
    },
    p(text, style, id) {
      return (
        <p id={id} className={style}>
          {text}
        </p>
      )
    },
    span(text, style, id) {
      return (
        <span id={id} className={style}>
          {text}
        </span>
      )
    },
  }

  const displayText = {
    h1:
      'text-3xl my-5 font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
    h2: 'font-bold my-4 mx-0 text-3xl ',
    h3: 'font-bold my-3 mx-0 text-2xl ',
    h4: 'font-bold my-2 mx-0 text-xl ',
    h5: 'font-bold text-lg ',
    h6: 'font-bold text-lg ',
    p: 'font-normal text-base ',
    span: '',
  }

  const textAlignment = {
    left: 'text-left ',
    center: 'text-center ',
    right: 'text-right ',
    justify: 'text-justify ',
  }

  const fontSize = {
    small: 'text-xs ',
    normal: 'text-base ',
    large: 'text-lg ',
  }

  const defaultTag = tagText['p']
  const text = tagText ? tagText[tag] : defaultTag
  let style = display ? displayText[display] : displayText[tag]
  style += textAlignment[align] ? textAlignment[align] : ''
  style += italic ? 'italic ' : ''
  style += underline ? 'underline ' : ''
  style += size ? fontSize[size] : ''
  style += color ? 'text-' + color : ''
  style += mark ? ' bg-' + mark : ''
  style += wordBreak ? ' break-' + wordBreak : ''
  style += font ? ' font-' + font : ''

  return text(children, style, id)
}
