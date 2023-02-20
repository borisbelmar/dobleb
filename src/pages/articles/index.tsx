import { Article } from '@/frontend/@types/Article'
import { ArticlesScreen } from '@/frontend/components/screens'
import articlesMock from '@/frontend/mocks/articles'
import Head from 'next/head'

export const getServerSideProps = async () => {
  return {
    props: {
      articles: articlesMock
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
