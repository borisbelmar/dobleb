import { BtnColor, BtnVariant } from '../Button'

const buttonColorsAndVariants = {
  solid: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 dark:bg-primary-400 dark:text-gray-900 dark:hover:bg-primary-500 dark:focus:ring-primary-400',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500 dark:bg-secondary-400 dark:text-gray-900 dark:hover:bg-secondary-500 dark:focus:ring-secondary-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus:ring-red-400',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 dark:bg-green-400 dark:text-gray-900 dark:hover:bg-green-500 dark:focus:ring-green-400',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 dark:focus:ring-yellow-400'
  },
  outline: {
    primary: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 dark:focus:ring-primary-400',
    secondary: 'border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white focus:ring-secondary-500 dark:border-secondary-400 dark:text-secondary-400 dark:hover:bg-secondary-400 dark:hover:text-gray-900 dark:focus:ring-secondary-400',
    danger: 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:ring-red-500 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-gray-900 dark:focus:ring-red-400',
    success: 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus:ring-green-500 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 dark:focus:ring-green-400',
    warning: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900 dark:focus:ring-yellow-400'
  },
  ghost: {
    primary: 'text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 dark:focus:ring-primary-400',
    secondary: 'text-secondary-500 hover:bg-secondary-500 hover:text-white focus:ring-secondary-500 dark:text-secondary-400 dark:hover:bg-secondary-400 dark:hover:text-gray-900 dark:focus:ring-secondary-400',
    danger: 'text-red-500 hover:bg-red-500 hover:text-white focus:ring-red-500 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-gray-900 dark:focus:ring-red-400',
    success: 'text-green-500 hover:bg-green-500 hover:text-white focus:ring-green-500 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 dark:focus:ring-green-400',
    warning: 'text-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900 dark:focus:ring-yellow-400'
  }
}

const getButtonColorAndVariant = (color: BtnColor, variant: BtnVariant) => {
  return buttonColorsAndVariants[variant as BtnVariant][color as BtnColor]
}

export default getButtonColorAndVariant
