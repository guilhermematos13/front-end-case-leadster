'use client'
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react'
import {
  Select as SelectStyled,
  SelectHeader,
  SelectOptions,
  SelectWrapper,
  SelectLabel,
} from './styles'
import { SelectProps } from './interface'
import { CaretDown } from '@phosphor-icons/react'

export const Select = forwardRef(
  (
    { title, options, placeholder, setSelectedItem, selectedItem }: SelectProps,
    ref: ForwardedRef<never>,
  ) => {
    const [isOpen, setOpen] = useState(false)

    const toggleSelect = () => setOpen((prev) => !prev)
    const closeSelect = () => setOpen(false)

    const getLabelSelected = () =>
      options.find((item) => item.value === selectedItem)?.label

    const addClickListener = useCallback((): void => {
      document.addEventListener('click', closeSelect)
    }, [])

    const closeClickListener = useCallback((): void => {
      document.removeEventListener('click', closeSelect)
    }, [])

    useEffect(() => {
      isOpen && addClickListener()
      return () => {
        isOpen && closeClickListener()
      }
    }, [isOpen, closeClickListener, addClickListener])

    return (
      <SelectWrapper>
        <SelectLabel>{title}</SelectLabel>
        <SelectStyled ref={ref}>
          <SelectHeader onClick={toggleSelect} isOpen={isOpen}>
            {selectedItem ? getLabelSelected() : placeholder}
            <CaretDown size={20} weight="fill" />
          </SelectHeader>
          <SelectOptions
            isOpen={isOpen}
            className="border border-blue-secondary"
          >
            {options.map((item, index) => (
              <div
                className="delay-50 cursor-pointer border-b border-b-blue-secondary px-2 py-4 transition-colors ease-in first-of-type:rounded-t-xl last-of-type:rounded-b-xl last-of-type:border-none hover:bg-blue-light"
                key={index}
                onClick={() => setSelectedItem(item.value)}
              >
                {item.label}
              </div>
            ))}
          </SelectOptions>
        </SelectStyled>
      </SelectWrapper>
    )
  },
)

Select.displayName = 'Select'
