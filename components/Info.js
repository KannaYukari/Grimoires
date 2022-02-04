import Image from './Image.js'
export default function Info({ info, cover }) {
  const cellStyle = 'bg-secondary-400 dark:bg-secondary-800'
  const coverRow = cover ? (
    <tr>
      <td colSpan="2">
        <Image src={cover} alt="Imagem de capa das informações" width={900} height={500} />
      </td>
    </tr>
  ) : (
    ''
  )
  return (
    <table className="border-separate rounded border-4 border-primary-900 w-2/5 md:w-full sm:w-full md:float-none sm:float-none float-right m-4">
      <thead>
        <tr>
          <th
            className={'text-black dark:text-white text-center font-extrabold ' + cellStyle}
            colSpan="2"
          >
            Informações
          </th>
        </tr>
        {coverRow}
      </thead>
      <tbody>
        {Object.keys(info).map((field) => {
          return (
            <tr key={field}>
              <td className={'font-bold ' + cellStyle}>{field}:</td>
              <td className={cellStyle}>{info[field]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
