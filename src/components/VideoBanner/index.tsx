'use client'
import Image from 'next/image'
import Photo from '../../../public/thumbnail.png'
import { Container } from './styles'
import { Play } from '@phosphor-icons/react'
import { ButtonHTMLAttributes } from 'react'

interface VideoBannerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function VideoBanner({ title, ...props }: VideoBannerProps) {
  return (
    <Container className="group" {...props}>
      <div className="container-image">
        <Image className="thumb" src={Photo} alt="" />
        <div className="overlay">
          <div className="content">
            <Play weight="fill" size={80} />
          </div>
        </div>
      </div>
      <p className="title line-clamp-2 group-hover:text-blue-primary group-hover:transition-colors">
        {title}
      </p>
    </Container>
  )
}
