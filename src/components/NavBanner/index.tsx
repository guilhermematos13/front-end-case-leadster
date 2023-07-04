import { SelectData } from '@/data/SelectData'
import { Button } from '../Button'
import { Select } from '../Select'

export function NavBanner() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] justify-between xs:mt-6 xs:flex-col xs:items-center xs:gap-4 xs:px-2 md:mt-16 xl:flex-row">
      <div className="flex gap-4 xs:flex-col xs:justify-center md:flex-row lg:justify-normal">
        <Button title="Agências " />
        <Button title="Chatbot" />
        <Button isSelected title="Marketing Digital" />
        <Button title="Geração de Leads" />
        <Button title="Mídia Paga" />
      </div>
      <div className="flex items-center gap-4">
        <Select
          options={SelectData}
          placeholder="Data da Publicação"
          title="Ordernar por"
        />
      </div>
    </div>
  )
}
