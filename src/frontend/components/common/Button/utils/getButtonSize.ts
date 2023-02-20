import { BtnSize } from '../Button'

const buttonSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-2 text-base',
  xl: 'px-4 py-2 text-lg'
}

const getButtonSize = (size: BtnSize) => {
  return buttonSizes[size as BtnSize]
}

export default getButtonSize
