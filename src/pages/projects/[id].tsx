import { getAllProjects, getProjectBySlug } from '@/backend'
import { Project } from '@/frontend/@types/Project'
import { ProjectContentScreen } from '@/frontend/components/screens'
import Head from 'next/head'

interface ServerSideContext {
  params: {
    id: string
  }
}

export const getStaticPaths = async () => {
  const projects = await getAllProjects()
  const paths = projects.map(project => ({
    params: {
      id: project.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: ServerSideContext) => {
  try {
    const project = await getProjectBySlug(params.id)
    return {
      props: {
        project
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

interface Props {
  project: Project
}

export default function ProjectPage({ project }: Props) {
  return (
    <>
      <Head>
        <title>dobleB. | {project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <ProjectContentScreen
        title={project.title}
        featuredImage={project.featuredImage}
        year={project.year}
        content={project.content}
      />
    </>
  )
}
