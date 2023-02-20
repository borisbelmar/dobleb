import { Article } from '@/frontend/@types/Article'
import { Project } from '@/frontend/@types/Project'
import FeaturedArticles from './components/FeaturedArticles'
import FeaturedProjects from './components/FeaturedProjects'
import Hero from './components/Hero'
import Pitch from './components/Pitch/Pitch'

interface Props {
  projects: Project[]
  articles: Article[]
}

export default function HomeScreen({
  projects,
  articles
}: Props) {
  return (
    <div className="pb-8">
      <Hero />
      <Pitch />
      <FeaturedArticles articles={articles} />
      <FeaturedProjects projects={projects} />
    </div>
  )
}
