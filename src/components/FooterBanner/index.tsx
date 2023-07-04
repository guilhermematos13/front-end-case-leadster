import Image from 'next/image'
import GraphImage from '../../../public/comparativo_img_CTA.png'
import RDImage from '../../../public/selo_RD.png'
import IconCard from '../../../public/no-card-dark.webp'
import IconRating from '../../../public/rating.webp'

export function FooterBanner() {
  return (
    <div className="flex items-start justify-center gap-32 bg-blue-primary/10 p-6">
      <div>
        <Image src={GraphImage} alt="" height={300} width={500} />
      </div>
      <div className="mt-32 w-1/3">
        <p className="text-4xl text-gray-800">Pronto para triplicar sua</p>
        <strong className="mt-2 text-4xl font-extrabold text-gray-800">
          Geração de Leads?
        </strong>
        <p className="mt-2 text-gray-800">
          Criação e ativação em <b className="text-gray-800">4 minutos</b>.
        </p>
        <div className="mt-4 w-full border border-gray-300" />
        <div className="mt-4 flex gap-4">
          <div className="flex cursor-pointer items-center rounded-full bg-blue-primary px-6 py-4 font-bold uppercase text-gray-50 hover:animate-wiggle">
            Ver demonstração
          </div>
          <Image src={RDImage} alt="" width={200} height={100} />
        </div>
        <div className="mt-4 flex w-full flex-nowrap items-center gap-2">
          <Image src={IconCard} alt="" width={20} height={14} />
          <p className="text-sm font-medium text-gray-800">
            <b>Não</b> é necessário Cartão de Crédito
          </p>
          <p className="font-medium text-gray-800">|</p>
          <Image src={IconRating} alt="" width={100} height={20} />
          <p className="text-sm font-medium text-gray-800">
            <b>4.9</b>/5 média de satisfação
          </p>
        </div>
      </div>
    </div>
  )
}
