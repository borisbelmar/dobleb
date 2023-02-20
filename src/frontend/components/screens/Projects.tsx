import { Project } from '@/frontend/@types/Project'
import ProjectItem from '../common/ProjectItem'
import { Container } from '../layouts'

interface Props {
  projects: Project[]
}

export default function ProjectsScreen({ projects }: Props) {
  return (
    <Container className="min-h-screen pb-6">
      <h1>Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(project => (
          <ProjectItem
            key={project.title}
            title={project.title}
            category={project.category}
            featuredImage={project.featuredImage}
          />
        ))}
      </div>
    </Container>
  )
}
