'use client'
import Image from 'next/image'
import Photo from '../../../public/thumbnail.png'
import { Container } from './styles'
import { Play } from '@phosphor-icons/react'

export function VideoBanner() {
  return (
    <Container className="group">
      <div className="container-image">
        <Image className="thumb" src={Photo} alt="" />
        <div className="overlay">
          <div className="content">
            <Play weight="fill" size={80} />
          </div>
        </div>
      </div>
      <div className="title group-hover:text-blue-primary group-hover:transition-colors">
        Como aumentar sua geracao de Leads feat. Traktor
      </div>
    </Container>
  )
}
