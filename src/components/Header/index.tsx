import Image from 'next/image'
import Logo from '../../../public/logo.png'

export function Header() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <Image src={Logo} alt="Leadster Logo" />
    </div>
  )
}
