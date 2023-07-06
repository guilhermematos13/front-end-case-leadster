interface FooterLinksProps {
  title: string
}

export function FooterLinks({ title }: FooterLinksProps) {
  return (
    <p className="mb-4 cursor-pointer text-xs text-gray-500 hover:animate-bounce hover:text-blue-primary hover:delay-0">
      {title}
    </p>
  )
}
