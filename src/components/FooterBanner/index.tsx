import Image from 'next/image'
import GraphImage from '../../../public/comparativo_img_CTA.png'
import RDImage from '../../../public/selo_RD.png'
import IconCard from '../../../public/no-card-dark.webp'
import IconRating from '../../../public/rating.webp'

export function FooterBanner() {
  return (
    <div className="flex items-start justify-center gap-32 bg-blue-primary/10 p-6">
      <div className="xs:hidden md:block">
        <Image src={GraphImage} alt="" height={300} width={500} />
      </div>
      <div className="xs:mt-6 xs:w-full md:w-2/3 lg:mt-32 lg:w-1/3">
        <p className="text-gray-800 xs:text-xl md:text-2xl xl:text-2xl">
          Pronto para triplicar sua
        </p>
        <strong className="mt-2 font-extrabold text-gray-800 xs:text-xl md:text-2xl xl:text-4xl">
          Geração de Leads?
        </strong>
        <p className="mt-2 text-sm text-gray-800">
          Criação e ativação em <b className="text-gray-800">4 minutos</b>.
        </p>
        <div className="mt-4 w-full border border-gray-300" />
        <div className="mt-4 flex gap-4 xs:flex-col xs:items-center xl:flex-row">
          <div className="flex cursor-pointer items-center rounded-full bg-blue-primary p-4 font-bold uppercase text-gray-50 hover:animate-wiggle hover:border hover:border-blue-primary hover:bg-green-50 hover:text-blue-primary hover:transition-colors md:text-center">
            Ver demonstração
          </div>
          <Image src={RDImage} alt="" width={200} height={100} />
        </div>
        <div className="mt-4 flex w-full flex-nowrap items-center gap-2 xs:flex-col xl:flex-row">
          <div className=" flex gap-2">
            <Image src={IconCard} alt="" width={20} height={14} />
            <p className="text-sm font-medium text-gray-800">
              <b>Não</b> é necessário Cartão de Crédito
            </p>
          </div>
          <div className="flex xs:mt-2 xs:flex-col xs:items-center xs:gap-2 xl:mt-0 xl:flex-row">
            <p className="font-medium text-gray-800 xs:hidden xl:block">|</p>
            <Image src={IconRating} alt="" width={100} height={20} />
            <p className="text-sm font-medium text-gray-800">
              <b>4.9</b>/5 média de satisfação
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
