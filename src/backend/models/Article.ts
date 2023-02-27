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

export function mapArticleNotionPageToDTO(page: any): ArticleDTO {
  const { id, properties, cover } = page

  return {
    id,
    title: properties.title.title[0].plain_text,
    slug: properties.slug.rich_text[0].plain_text,
    description: properties.description.rich_text[0].plain_text,
    featuredImage: cover?.external?.url || '',
    content: '',
    date: properties.publishedAt.date.start,
    tags: properties.tags.multi_select.map((tag: any) => tag.name)
  }
}
