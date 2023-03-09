import { Article } from '@/frontend/@types/Article'
import { Project } from '@/frontend/@types/Project'
import { Technology } from '@/frontend/@types/Technology'
import FeaturedArticles from './components/FeaturedArticles'
import FeaturedProjects from './components/FeaturedProjects'
import Hero from './components/Hero'
import About from '../../common/About/About'
import Technologies from './components/Technologies'

interface Props {
  projects: Project[]
  articles: Article[]
  technologies: Technology[]
}

export default function HomeScreen({
  projects,
  articles,
  technologies
}: Props) {
  return (
    <>
      <Hero />
      <About />
      <Technologies technologies={technologies} />
      <FeaturedArticles articles={articles} />
      <FeaturedProjects projects={projects} />
    </>
  )
}
