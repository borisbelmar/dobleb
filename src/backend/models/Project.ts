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

export interface ProjectNotionPage {
  id: string
  properties: {
    title: {
      title: {
        plain_text: string
      }[]
    }
    slug: {
      rich_text: {
        plain_text: string
      }[]
    }
    description: {
      rich_text: {
        plain_text: string
      }[]
    }
    year: {
      number: number
    }
    category: {
      select: {
        name: string
      }
    }
  }
  cover: {
    external: {
      url: string
    }
  }
}

export function mapProjectNotionPageToDTO(page: unknown): ProjectDTO {
  const { id, properties, cover } = page as ProjectNotionPage

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
