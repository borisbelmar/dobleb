import { Article } from '@/frontend/@types/Article'
import Masonry from 'react-masonry-css'
import ArticleItem from '../common/ArticleItem'
import { Container } from '../layouts'

interface Props {
  articles: Article[]
}

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1
}

export default function ArticlesScreen({ articles }: Props) {
  return (
    <Container className="min-h-screen pb-6">
      <h1>Articles</h1>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex flex-wrap -ml-4"
        columnClassName="flex-1 pl-4"
      >
        {articles.map(article => (
          <div key={article.title} className="mb-4">
            <ArticleItem
              title={article.title}
              featuredImage={article.featuredImage}
              date={article.date}
              description={article.description}
              tags={article.tags}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
