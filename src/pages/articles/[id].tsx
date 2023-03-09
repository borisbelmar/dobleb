import { getAllArticles, getArticleBySlug } from '@/backend'
import { Article } from '@/frontend/@types/Article'
import { ArticleContentScreen } from '@/frontend/components/screens'
import Head from 'next/head'

interface ServerSideContext {
  params: {
    id: string
  }
}

export const getStaticPaths = async () => {
  const articles = await getAllArticles()
  const paths = articles.map(article => ({
    params: {
      id: article.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: ServerSideContext) => {
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
