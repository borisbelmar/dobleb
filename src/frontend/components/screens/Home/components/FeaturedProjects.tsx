import { Project } from '@/frontend/@types/Project'
import ProjectItem from '@/frontend/components/common/ProjectItem'
import Link from 'next/link'

interface Props {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: Props) {
  return (
    <section className="bg-primary-500 dark:bg-dark-primary-900 pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <h2 className="text-2xl font-bold text-dark-primary-800 dark:text-primary-50 mb-1">
          Some of my experience
        </h2>
        <Link href="/projects" as="a" className="transition text-primary-50 hover:text-primary-200 dark:text-primary-500 dark:hover:text-primary-700 inline-block mb-8">
          {'View all the things I\'ve done'}
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects?.map(project => (
            <ProjectItem
              key={project.slug}
              slug={project.slug}
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
