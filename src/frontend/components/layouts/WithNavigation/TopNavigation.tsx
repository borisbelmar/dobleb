import Link from 'next/link'
import { Logo } from '../../common'
import { useTheme } from '../../context'
import Container from '../Container'
import LinkList from './LinkList'
import ThemeSwitchButton from './ThemeSwitchButton'

export default function TopNavigation() {
  const { theme } = useTheme()

  return (
    <nav className="dark:bg-dark-primary-800 bg-primary-500">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div>
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-6" isOverColor={theme === 'light'} />
            </Link>
          </div>
          <div className="flex gap-8 items-center">
            <LinkList />
            <div className="flex items-center gap-4">
              <ThemeSwitchButton />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}
