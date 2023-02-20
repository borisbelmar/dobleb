import { createContext, useContext } from 'react'
import useThemeContext from './hooks/useThemeContext'

export type Theme = 'dark' | 'light'

interface ThemeContextProps {
  theme: Theme
  switchTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  switchTheme: () => {}
})

interface ProvideProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ProvideProps) {
  const value = useThemeContext()

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
