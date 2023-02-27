import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { ArticleDTO, mapArticleNotionPageToDTO } from '../../models/Article'

const getArticleBySlug = async (slug: string): Promise<ArticleDTO | null> => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID as string

  const response = await notion.databases.query({
    database_id: databaseId,
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

  if (response.results.length > 0) {
    const pageData = response.results[0]
    const articleDTO = mapArticleNotionPageToDTO(pageData)

    const n2m = new NotionToMarkdown({ notionClient: notion })
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
