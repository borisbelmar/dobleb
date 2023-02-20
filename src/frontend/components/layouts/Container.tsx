import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: HTMLDivElement['className']
}

export default function Container({ children, className }: Props) {
  return (
    <div className={clsx('max-w-6xl mx-auto px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}
