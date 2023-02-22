import type { MarkdownContent } from './MarkdownContent'

export interface ArticleDTO {
  id: string
  title: string
  slug: string
  description: string
  featuredImage: string
  content: string
  date: string
  tags: string[]
}

export function mapArticleMarkdownToDTO(mdContent: MarkdownContent): ArticleDTO {
  const { slug, data, content } = mdContent

  return {
    id: slug,
    title: data.title as string,
    slug,
    description: data.description as string,
    featuredImage: data.featuredImage as string,
    content,
    date: data.date as string,
    tags: data.tags as string[]
  }
}
