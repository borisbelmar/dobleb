import getMarkdownContent from '@/backend/utils/getMarkdownContent'
import { ArticleDTO, mapArticleMarkdownToDTO } from '../../models/Article'

const getArticleBySlug = async (slug: string): Promise<ArticleDTO | null> => {
  const articleMarkdown = await getMarkdownContent(slug, 'articles')

  if (articleMarkdown) {
    return mapArticleMarkdownToDTO(articleMarkdown)
  }

  return null
}

export default getArticleBySlug
