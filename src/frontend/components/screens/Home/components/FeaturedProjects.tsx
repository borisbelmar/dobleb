import { Project } from '@/frontend/@types/Project'
import ProjectItem from '@/frontend/components/common/ProjectItem'

interface Props {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: Props) {
  return (
    <section className="bg-primary-500 dark:bg-dark-primary-900 py-8">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <h2 className="text-2xl font-bold text-dark-primary-800 dark:text-primary-50 mb-2">
          My favorite projects
        </h2>
        <p className="text-gray-800 dark:text-gray-300 mb-8 text-lg">
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc ut aliquam aliquet, nisl nisl aliquet nunc, ut aliquam nisl lorem quis nunc. Sed tincidunt, nunc ut aliquam aliquet, nisl nisl aliquet nunc, ut aliquam nisl lorem quis nunc.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects?.map(project => (
            <ProjectItem
              key={project.title}
              featuredImage={project.featuredImage}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
