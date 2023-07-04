import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  isSelected?: boolean
}

export function Button({ title, isSelected, ...props }: ButtonProps) {
  return (
    <button
      className={
        isSelected
          ? `rounded-full border border-blue-primary bg-blue-primary px-4 py-2 font-medium text-gray-50`
          : `rounded-full border border-gray-800 px-4 py-2 font-medium text-gray-800 duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-primary hover:text-blue-primary`
      }
      {...props}
    >
      {title}
    </button>
  )
}
