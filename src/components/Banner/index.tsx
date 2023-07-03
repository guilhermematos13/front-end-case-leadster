import Image from 'next/image'
import FontImage from '../../../public/asset-header.png'

export function Banner() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-primary/10 p-28">
      <span className="mb-5 rounded-full rounded-bl-md border-2 border-blue-primary px-6 py-1 text-sm font-bold uppercase text-blue-primary hover:bg-blue-primary hover:text-gray-50 hover:transition-colors">
        Webinars Exclusivos
      </span>
      <p className="mb-4 text-4xl font-semibold text-gray-800">
        Menos Conversinha,
      </p>
      <div className="mb-6 flex">
        <strong className="text-7xl font-bold text-blue-primary">
          Mais Conversão
        </strong>
        <Image src={FontImage} alt="" className="w-13 -ml-7 -mt-1 h-9" />
      </div>
      <div>
        <div className="border-t border-t-gray-300" />
        <p className=" p-4">
          Conheça as estratégias que
          <b className="text-gray-800"> mudaram o jogo</b> e como aplicá-las no
          seu negócio
        </p>
      </div>
    </div>
  )
}
