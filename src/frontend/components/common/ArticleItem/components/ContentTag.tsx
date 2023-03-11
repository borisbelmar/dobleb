interface Props {
  tag: string
}

export default function ContentTag({ tag }: Props) {
  return (
    <span
      className="text-xs text-dark-primary-500 dark:text-dark-primary-800 bg-primary-200 dark:bg-primary-500 px-1 py-0.5 rounded"
    >
      #{tag}
    </span>
  )
}
