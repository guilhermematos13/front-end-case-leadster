interface FooterTitleProps {
  title: string
}

export function FooterTitle({ title }: FooterTitleProps) {
  return <p className="mb-8 text-sm font-semibold text-gray-800">{title}</p>
}
