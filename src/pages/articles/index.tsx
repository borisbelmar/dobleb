import { Article } from '@/frontend/@types/Article'
import { ArticlesScreen } from '@/frontend/components/screens'
import { getAllArticles } from '@/frontend/services/articles'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const articles = await getAllArticles()
  return {
    props: {
      articles
    }
  }
}

interface Props {
  articles: Article[]
}

export default function Articles({
  articles
}: Props) {
  return (
    <>
      <Head>
        <title>dobleB. | Articles</title>
        <meta name="description" content="My articles" />
      </Head>
      <ArticlesScreen articles={articles} />
    </>
  )
}
