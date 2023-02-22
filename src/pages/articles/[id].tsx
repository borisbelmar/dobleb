import { Article } from '@/frontend/@types/Article'
import { ArticleContentScreen } from '@/frontend/components/screens'
import { getArticleBySlug } from '@/frontend/services/articles'
import Head from 'next/head'

interface ServerSideContext {
  params: {
    id: string
  }
}

export const getServerSideProps = async ({ params }: ServerSideContext) => {
  try {
    const article = await getArticleBySlug(params.id)
    return {
      props: {
        article
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

interface Props {
  article: Article
}

export default function ArticlePage({ article }: Props) {
  return (
    <>
      <Head>
        <title>dobleB. | {article.title}</title>
        <meta name="description" content={article.description} />
      </Head>
      <ArticleContentScreen
        title={article.title}
        featuredImage={article.featuredImage}
        date={article.date}
        content={article.content}
      />
    </>
  )
}
