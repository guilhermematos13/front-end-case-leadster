import Image from 'next/image'
import FontImage from '../../../public/asset-header.png'

export function Banner() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-primary/10 p-28 px-6">
      <span className="mb-4 rounded-full rounded-bl-md border-2 border-blue-primary py-1 text-xs font-bold uppercase text-blue-primary hover:bg-blue-primary hover:text-gray-50 hover:transition-colors xs:px-2 sm:px-4">
        Webinars Exclusivos
      </span>
      <p className="mb-4 font-semibold text-gray-800 xs:text-xl sm:text-4xl">
        Menos Conversinha,
      </p>
      <div className="mb-6 flex xs:mb-3">
        <strong className="font-bold text-blue-primary xs:text-3xl sm:text-7xl">
          Mais Conversão
        </strong>
        <Image
          src={FontImage}
          alt=""
          className="xs:-ml-4 xs:h-3 xs:w-6 sm:-ml-6 sm:mt-1 sm:h-6 sm:w-10"
        />
      </div>
      <div>
        <div className="border-t border-t-gray-300" />
        <p className="p-4 font-medium text-gray-800 xs:text-center xs:text-sm sm:text-base">
          Conheça as estratégias que
          <b className="font-extrabold "> mudaram o jogo</b> e como aplicá-las
          no seu negócio
        </p>
      </div>
    </div>
  )
}
