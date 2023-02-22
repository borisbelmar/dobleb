import BackButton from '../../common/BackButton'
import Footer from './Footer'
import TopNavigation from './TopNavigation'

interface Props {
  children: React.ReactNode
}

export default function WithNavigation({ children }: Props) {
  return (
    <main className="dark:bg-dark-primary-900 bg-white dark:text-white min-h-screen h-full transition-colors flex flex-col">
      <TopNavigation />
      <div className="h-full">
        {children}
      </div>
      <Footer />
      <BackButton />
    </main>
  )
}
