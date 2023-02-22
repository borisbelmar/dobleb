import { Project } from '@/frontend/@types/Project'
import ProjectItem from '../common/ProjectItem'
import { Container } from '../layouts'

interface Props {
  projects: Project[]
}

export default function ProjectsScreen({ projects }: Props) {
  return (
    <Container className="pb-6">
      <h1 className="text-3xl py-8 font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            slug={project.slug}
            title={project.title}
            category={project.category}
            featuredImage={project.featuredImage}
          />
        ))}
      </div>
    </Container>
  )
}
