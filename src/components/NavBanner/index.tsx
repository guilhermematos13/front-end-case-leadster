import { SelectData } from '@/data/SelectData'
import { Button } from '../Button'
import { Select } from '../Select'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { FilterData } from '@/data/FilterData'

interface NavBannerProps {
  setOrder: Dispatch<SetStateAction<string | undefined>>
  setFilter: Dispatch<SetStateAction<string | undefined>>
}

export function NavBanner({ setOrder, setFilter }: NavBannerProps) {
  const [selectedItem, setSelectedItem] = useState<undefined | string>()
  const [filterItem, setFilterItem] = useState<string>()

  const clearFilter = () => {
    setFilter('')
    setFilterItem(undefined)
  }

  const isSelectedFilter = (title: string) => filterItem === title

  const handleSetOrder = useCallback(() => {
    if (selectedItem === 'date') return setOrder(`_sort=${selectedItem}`)
    return setOrder(`_order=${selectedItem}&_sort=title`)
  }, [selectedItem, setOrder])

  const handleSetFilter = useCallback(() => {
    return setFilter(`type_like=${filterItem}`)
  }, [filterItem, setFilter])

  useEffect(() => {
    selectedItem && handleSetOrder()
  }, [selectedItem, handleSetOrder])

  useEffect(() => {
    filterItem && handleSetFilter()
  }, [filterItem, handleSetFilter])

  return (
    <div>
      <div className="mx-auto flex w-full max-w-[1200px] justify-between xs:mt-6 xs:flex-col xs:items-center xs:gap-4 xs:px-2 md:mt-16 xl:flex-row">
        <div className="flex gap-4 xs:flex-col xs:justify-center md:flex-row lg:justify-normal">
          {FilterData.map((title) => (
            <Button
              key={title}
              title={title}
              isSelected={isSelectedFilter(title)}
              onClick={() => {
                isSelectedFilter(title) ? clearFilter() : setFilterItem(title)
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Select
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            options={SelectData}
            placeholder="Selecione"
            title="Ordernar por"
          />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] justify-between xs:mt-4 xs:flex-col xs:items-center xs:gap-4 xs:px-2 md:mt-8 xl:flex-row">
        <div className="w-full border border-gray-300" />
      </div>
    </div>
  )
}
