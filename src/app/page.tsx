import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { FooterBanner } from '@/components/FooterBanner'
import { Header } from '@/components/Header'
import { MainContent } from '@/components/MainContent'
import { NavBanner } from '@/components/NavBanner'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <Banner />
      <NavBanner />
      <MainContent />
      <FooterBanner />
      <Footer />
    </div>
  )
}
