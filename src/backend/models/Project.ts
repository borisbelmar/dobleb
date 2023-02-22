import { MarkdownContent } from './MarkdownContent'

export interface ProjectDTO {
  id: string
  title: string
  slug: string
  description: string
  featuredImage: string
  year: number
  content: string
  category: string
}

export function mapProjectMarkdownToDTO(mdContent: MarkdownContent): ProjectDTO {
  const { slug, data, content } = mdContent

  return {
    id: slug,
    title: data.title as string,
    slug,
    description: data.description as string,
    featuredImage: data.featuredImage as string,
    year: data.year as number,
    content,
    category: data.category as string
  }
}
