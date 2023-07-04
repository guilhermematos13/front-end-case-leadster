import { SelectHTMLAttributes } from 'react'

interface Option {
  value: string
  label: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string
  options: Option[]
  title: string
}

export interface SelectStyledProps {
  isOpen?: boolean
}
