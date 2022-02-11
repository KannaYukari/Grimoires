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
            className="cursor-pointer border-8 border-primary-900 aspect-video mt-0 
            w-[225px] h-[126.56px] 
            sm:w-[360px] sm:h-[202.50px] 
            md:w-[533.33px] md:h-[300px] 
            lg:w-[640px] lg:h-[360px] 
            xl:w-[768px] xl:h-[432px] 
            2xl:w-[1024px] 2xl:h-[576px]"
            src={`https://img.youtube.com/vi/${id}/${image}.jpg`}
          />
          <div
            target="_blank"
            rel="noopener·noreferrer"
            className="absolute 
          px-[95px] py-[50px]
          sm:px-[130px] sm:py-[101.25x] 
          md:px-[266.66px] md:py-[150px] 
          lg:px-[320px] lg:py-[180px] 
          xl:px-[384px] xl:py-[216px] 
          2xl:px-[512px] 2xl:py-[288px]
          "
          >
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
