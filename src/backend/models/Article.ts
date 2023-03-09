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

export interface ArticleNotionPage {
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
    publishedAt: {
      date: {
        start: string
      }
    }
    tags: {
      multi_select: {
        name: string
      }[]
    }
  },
  cover?: {
    external?: {
      url: string
    }
  }
}

export function mapArticleNotionPageToDTO(page: unknown): ArticleDTO {
  const { id, properties, cover } = page as ArticleNotionPage

  return {
    id,
    title: properties.title.title[0].plain_text,
    slug: properties.slug.rich_text[0].plain_text,
    description: properties.description.rich_text[0].plain_text,
    featuredImage: cover?.external?.url || '',
    content: '',
    date: properties.publishedAt.date.start,
    tags: properties.tags.multi_select.map(tag => tag.name)
  }
}
