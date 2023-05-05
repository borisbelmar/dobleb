interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
}

export default function ListItem({ children }: Props) {
  return (
    <li
      className="list-disc list-outside marker:text-primary-500"
    >
      {children}
    </li>
  )
}
