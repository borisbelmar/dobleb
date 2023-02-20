import clsx from 'clsx'
import getButtonColorAndVariant from './utils/getButtonColorAndVariant'
import getButtonSize from './utils/getButtonSize'

export type BtnVariant = 'solid' | 'outline' | 'ghost'
export type BtnSize = 'sm' | 'md' | 'lg' | 'xl'
export type BtnColor = 'primary' | 'secondary' | 'danger' | 'success' | 'warning'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  variant?: BtnVariant
  disabled?: boolean
  size?: BtnSize
  color?: BtnColor
}

export default function Button({
  children,
  type = 'button',
  onClick,
  variant = 'solid',
  disabled = false,
  size = 'md',
  color = 'primary'
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        'rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
        'font-medium transition',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        getButtonColorAndVariant(color, variant),
        getButtonSize(size)
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
