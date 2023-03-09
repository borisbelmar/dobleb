interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export default function Anchor({ children, ...props }: Props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-500 hover:text-primary-700"
    >
      {children}
    </a>
  )
}
