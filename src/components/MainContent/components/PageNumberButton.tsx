import { ButtonHTMLAttributes } from 'react'

interface PageNumberProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  number: string
  isSelection?: boolean
}

export function PageNumberButton({
  number,
  isSelection = false,
  ...props
}: PageNumberProps) {
  return (
    <button
      {...props}
      className={
        isSelection
          ? 'rounded-md border border-blue-primary px-2 py-1 font-semibold text-blue-primary'
          : 'cursor-pointer p-4 font-normal text-gray-800 hover:-translate-y-1 hover:scale-110 hover:text-blue-primary hover:transition'
      }
    >
      {number}
    </button>
  )
}
