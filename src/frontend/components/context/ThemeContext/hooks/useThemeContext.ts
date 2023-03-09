import { useCallback, useEffect, useMemo, useState } from 'react'
import { Theme } from '../ThemeContext'
import getInitialTheme from '../utils/getInitialTheme'

export default function useThemeContext() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(getInitialTheme())
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark', 'transition')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])

  const switchTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  return useMemo(() => ({
    theme,
    switchTheme
  }), [theme, switchTheme])
}
