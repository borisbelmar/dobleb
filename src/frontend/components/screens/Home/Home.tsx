import { Article } from '@/frontend/@types/Article'
import { Project } from '@/frontend/@types/Project'
import FeaturedArticles from './components/FeaturedArticles'
import FeaturedProjects from './components/FeaturedProjects'
import Hero from './components/Hero'
import About from '../../common/About/About'

interface Props {
  projects: Project[]
  articles: Article[]
}

export default function HomeScreen({
  projects,
  articles
}: Props) {
  return (
    <>
      <Hero />
      <About />
      <FeaturedArticles articles={articles} />
      <FeaturedProjects projects={projects} />
    </>
  )
}
