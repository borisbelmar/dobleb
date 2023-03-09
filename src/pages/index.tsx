import { getAllArticles, getAllProjects, getAllTechnologies } from '@/backend'
import { Article } from '@/frontend/@types/Article'
import { Project } from '@/frontend/@types/Project'
import { Technology } from '@/frontend/@types/Technology'
import { HomeScreen } from '@/frontend/components/screens'
import Head from 'next/head'

export const getStaticProps = async () => {
  const [projects, articles, technologies] = await Promise.all([
    getAllProjects(true),
    getAllArticles(true),
    getAllTechnologies()
  ])

  return {
    props: {
      projects,
      articles,
      technologies
    }
  }
}

interface Props {
  projects: Project[]
  articles: Article[]
  technologies: Technology[]
}

export default function Home({
  projects,
  articles,
  technologies
}: Props) {
  return (
    <>
      <Head>
        <title>dobleB. by Boris Belmar</title>
      </Head>
      <HomeScreen
        projects={projects}
        articles={articles}
        technologies={technologies}
      />
    </>
  )
}
