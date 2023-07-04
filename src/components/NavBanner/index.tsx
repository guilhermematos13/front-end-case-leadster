import { SelectData } from '@/data/SelectData'
import { Button } from '../Button'
import { Select } from '../Select'

export function NavBanner() {
  return (
    <div className="mx-auto mt-16 flex w-full max-w-[1200px] justify-between">
      <div className="flex gap-4">
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
