'use client'
import Image from 'next/image'
import Photo from '../../../public/thumbnail.png'
import { Container } from './styles'
import { Play } from '@phosphor-icons/react'

export function VideoBanner() {
  return (
    <Container className="group">
      <div className="container">
        <Image className="image" src={Photo} alt="" />
        <div className="overlay">
          <div className="content">
            <Play weight="fill" size={60} />
          </div>
        </div>
      </div>
      <div className="title group-hover:text-blue-primary">
        Como aumentar sua geracao de Leads feat. Traktor
      </div>
    </Container>
  )
}