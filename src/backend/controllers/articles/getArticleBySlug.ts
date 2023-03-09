import getDoblebNotionClient from '@/backend/services/DoblebNotionClient'
import { NotionToMarkdown } from 'notion-to-md'
import { ArticleDTO, mapArticleNotionPageToDTO } from '../../models/Article'

const getArticleBySlug = async (slug: string): Promise<ArticleDTO | null> => {
  const { client, query } = getDoblebNotionClient('articles')

  const response = await query({
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'slug',
          rich_text: {
            equals: slug
          }
        }
      ]
    }
  })

  if (response.length > 0) {
    const pageData = response[0]
    const articleDTO = mapArticleNotionPageToDTO(pageData)

    const n2m = new NotionToMarkdown({ notionClient: client })
    const markdownContent = await n2m.pageToMarkdown(pageData.id)
    const markdownString = n2m.toMarkdownString(markdownContent)

    return {
      ...articleDTO,
      content: markdownString
    }
  }

  return null
}

export default getArticleBySlug
