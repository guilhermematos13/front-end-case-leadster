'use client'
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { FooterBanner } from '@/components/FooterBanner'
import { Header } from '@/components/Header'
import { MainContent } from '@/components/MainContent'
import * as Dialog from '@radix-ui/react-dialog'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Dialog.Root>
        <Toaster />
        <Header />
        <Banner />
        <MainContent />
        <FooterBanner />
        <Footer />
      </Dialog.Root>
    </div>
  )
}
