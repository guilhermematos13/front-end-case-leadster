'use client'
import LogoGif from '../../../public/leadster_logo_gif.gif'
import Image from 'next/image'
import { FooterTitle } from './Components/FooterTitle'
import { FooterLinks } from './Components/FooterLinks'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1200px] flex-col">
      <div className="flex flex-col items-center justify-center p-6">
        <Image src={LogoGif} alt="" />
        <p className="mt-1 text-xs font-medium text-gray-400">
          Transformando visitantes em clientes.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-4">
        <div>
          <FooterTitle title="Links Príncipais" />
          <FooterLinks title="Home" />
          <FooterLinks title="Ferramentas" />
          <FooterLinks title="Preços" />
          <FooterLinks title="Contato" />
        </div>
        <div>
          <FooterTitle title="Cases" />
          <FooterLinks title="Geração de Leads B2B" />
          <FooterLinks title="Geração de Leads Software" />
          <FooterLinks title="Geração de Leads em Imobiliária" />
          <FooterLinks title="Cases de Sucesso" />
        </div>
        <div>
          <FooterTitle title="Materiais" />
          <FooterLinks title="Blog" />
          <FooterLinks title="Parceria com Agências" />
          <FooterLinks title="Guia Definitivo do Marketing" />
          <FooterLinks title="Materias Gratuitos" />
        </div>
        <div>
          <FooterTitle title="Siga a Leadster" />
          <div className="-mt-4 mb-4 flex gap-2">
            <div className="group rounded-full bg-gray-300 p-2 hover:bg-blue-primary hover:transition hover:duration-500">
              <LinkedinLogo
                size={20}
                weight="fill"
                className="text-gray-500 group-hover:text-gray-50 group-hover:transition group-hover:duration-500"
              />
            </div>
            <div className="group rounded-full bg-gray-300 p-2 hover:bg-blue-primary hover:transition hover:duration-500">
              <FacebookLogo
                size={20}
                weight="fill"
                className="text-gray-500 group-hover:text-gray-50 group-hover:transition group-hover:duration-500"
              />
            </div>
            <div className="group rounded-full bg-gray-300 p-2 hover:bg-blue-primary hover:transition hover:duration-500">
              <InstagramLogo
                size={20}
                weight="fill"
                className="text-gray-500 group-hover:text-gray-50 group-hover:transition group-hover:duration-500"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <span className="text-xs font-semibold text-gray-800">E-mail:</span>
            <FooterLinks title="contato@leadster.com.br" />
          </div>
          <div className="flex gap-1">
            <span className="text-xs font-semibold text-gray-800">
              Telefone:
            </span>
            <FooterLinks title="(42) 98828-9851" />
          </div>
        </div>
      </div>
    </div>
  )
}