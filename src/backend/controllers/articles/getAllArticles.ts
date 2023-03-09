import getDoblebNotionClient from '@/backend/services/DoblebNotionClient'
import { ArticleDTO, mapArticleNotionPageToDTO } from '../../models/Article'

const getAllArticles = async (featured?: boolean): Promise<ArticleDTO[]> => {
  const { query } = getDoblebNotionClient('articles')

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

  const response = await query({
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

  return response.map(mapArticleNotionPageToDTO)
}

export default getAllArticles
