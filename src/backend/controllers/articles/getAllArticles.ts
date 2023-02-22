import getAllMarkdownContent from '@/backend/utils/getAllMarkdownContent'
import getFilteredItems from '@/backend/utils/getFilteredContent'
import sortContent from '@/backend/utils/sortContent'
import { ArticleDTO, mapArticleMarkdownToDTO } from '../../models/Article'

const getAllArticles = async (featured?: boolean): Promise<ArticleDTO[]> => {
  const articlesMarkdown = await getAllMarkdownContent('articles')

  const filteredArticles = getFilteredItems(articlesMarkdown, { featured })

  if (filteredArticles) {
    const sortedArticles = sortContent(filteredArticles, { sortBy: 'date', direction: 'desc' })
    return sortedArticles.map(mapArticleMarkdownToDTO)
  }

  return []
}

export default getAllArticles
