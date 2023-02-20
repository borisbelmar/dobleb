import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from '../../context'

export default function ThemeSwitchButton() {
  const { theme, switchTheme } = useTheme()
  return (
    <button
      className="p-2 rounded-full hover:bg-black hover:bg-opacity-10 dark:hover:bg-dark-primary-700 border border-dark-primary-400"
      onClick={switchTheme}
    >
      {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}
