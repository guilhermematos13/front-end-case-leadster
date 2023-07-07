'use client'
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { FooterBanner } from '@/components/FooterBanner'
import { Header } from '@/components/Header'
import { MainContent } from '@/components/MainContent'
import { Modal } from '@/components/Modal'
import { NavBanner } from '@/components/NavBanner'
import * as Dialog from '@radix-ui/react-dialog'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Dialog.Root>
        <Header />
        <Banner />
        <NavBanner />
        <MainContent />
        <FooterBanner />
        <Footer />
        <Modal title="Teste">Teste</Modal>
      </Dialog.Root>
    </div>
  )
}
