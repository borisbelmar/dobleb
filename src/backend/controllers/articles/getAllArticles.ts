import { Client } from '@notionhq/client'
import { ArticleDTO, mapArticleNotionPageToDTO } from '../../models/Article'

const getAllArticles = async (featured?: boolean): Promise<ArticleDTO[]> => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID as string

  const filtersAnd = [
    {
      property: 'published',
      checkbox: {
        equals: true
      }
    }
  ]

  if (featured) {
    filtersAnd.push({
      property: 'featured',
      checkbox: {
        equals: true
      }
    })
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: filtersAnd
    },
    sorts: [
      {
        property: 'publishedAt',
        direction: 'descending'
      }
    ]
  })

  return response.results.map(mapArticleNotionPageToDTO)
}

export default getAllArticles
