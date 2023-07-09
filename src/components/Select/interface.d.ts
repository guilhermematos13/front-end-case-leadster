import { Dispatch, SetStateAction } from 'react'

interface Option {
  value: string
  label: string
}

export interface SelectProps {
  placeholder: string
  options: Option[]
  title: string
  setSelectedItem: Dispatch<SetStateAction<string | undefined>>
  selectedItem: string | undefined
}

export interface SelectStyledProps {
  open?: boolean
}
