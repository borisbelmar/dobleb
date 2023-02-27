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

export function mapProjectNotionPageToDTO(page: any): ProjectDTO {
  const { id, properties, cover } = page

  return {
    id,
    title: properties.title.title[0].plain_text,
    slug: properties.slug.rich_text[0].plain_text,
    description: properties.description.rich_text[0].plain_text,
    featuredImage: cover?.external?.url || '',
    year: properties.year.number,
    content: '',
    category: properties.category.select.name
  }
}
