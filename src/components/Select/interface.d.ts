interface Option {
  value: string
  label: string
}

export interface SelectProps {
  placeholder: string
  options: Option[]
  title: string
}

export interface SelectStyledProps {
  isOpen?: boolean
}
