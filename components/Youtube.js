import Icon from './social-icons'
import Text from './Text'

export default function Youtube({ id, title = '', image = 'hqdefault' }) {
  let url = id.split('/')
  let query = url[url.length - 1]
  query = query.split('=')
  id = query[query.length - 1]
  return (
    <>
      <span className="bot-0 ">
        <Text tag="h4" color={'primary-500'} align={'center'}>
          {title}
        </Text>
      </span>
      <div className="flex justify-center relative mt-0 ">
        <div className="flex relative">
          <img
            className="cursor-pointer border-8 border-primary-900 w-[496px] h-[376px] mt-0"
            src={`https://img.youtube.com/vi/${id}/${image}.jpg`}
          />
          <div target="_blank" rel="noopener noreferrer" className="absolute px-[224px] py-[200px]">
            <Icon kind="youtube" href={`https://youtu.be/${id}`} size="12" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="absolute px-[224px] py-[200px]"
            href={`https://youtu.be/${id}`}
          ></a>
        </div>
      </div>
    </>
  )
}
