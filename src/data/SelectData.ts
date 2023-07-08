interface SelectDataProps {
  label: string
  value: string
}

export const SelectData: SelectDataProps[] = [
  {
    label: 'Data de Publicação',
    value: 'date',
  },

  {
    label: '[A - Z]',
    value: 'asc',
  },

  {
    label: '[Z - A]',
    value: 'desc',
  },
]
