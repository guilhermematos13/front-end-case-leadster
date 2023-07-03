import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <Banner />
    </div>
  )
}
