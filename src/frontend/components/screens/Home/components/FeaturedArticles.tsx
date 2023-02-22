import ArticleItem from '@/frontend/components/common/ArticleItem'
import { Article } from '@/frontend/@types/Article'
import Link from 'next/link'

interface Props {
  articles: Article[]
}

export default function FeaturedArticles({ articles }: Props) {
  return (
    <section className="bg-primary-500 dark:bg-dark-primary-900 pb-8 pt-16">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <h2 className="text-2xl font-bold text-dark-primary-800 dark:text-primary-50 mb-1">
          Some of my Articles
        </h2>
        <Link href="/articles" as="a" className="transition text-primary-50 hover:text-primary-200 dark:text-primary-500 dark:hover:text-primary-700 inline-block mb-8">
          View all articles
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {articles?.map(article => (
            <ArticleItem
              key={article.slug}
              slug={article.slug}
              featuredImage={article.featuredImage}
              title={article.title}
              description={article.description}
              date={article.date}
              tags={article.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
