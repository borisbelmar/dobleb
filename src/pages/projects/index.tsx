import { Project } from '@/frontend/@types/Project'
import { ProjectsScreen } from '@/frontend/components/screens'
import { getAllProjects } from '@/frontend/services/projects'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const projects = await getAllProjects()
  return {
    props: {
      projects
    }
  }
}

interface Props {
  projects: Project[]
}

export default function Projects({
  projects
}: Props) {
  return (
    <>
      <Head>
        <title>dobleB. | Projects</title>
        <meta name="description" content="My projects" />
      </Head>
      <ProjectsScreen projects={projects} />
    </>
  )
}
