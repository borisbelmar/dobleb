import { getAllArticles } from '@/backend'
import { Article } from '@/frontend/@types/Article'
import { ArticlesScreen } from '@/frontend/components/screens'
import Head from 'next/head'

export const getStaticProps = async () => {
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
