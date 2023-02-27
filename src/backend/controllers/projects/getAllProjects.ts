import { Client } from '@notionhq/client'
import { mapProjectNotionPageToDTO, ProjectDTO } from '../../models/Project'

const getAllProjects = async (featured?: boolean): Promise<ProjectDTO[]> => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID as string

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
        property: 'year',
        direction: 'descending'
      }
    ]
  })

  return response.results.map(mapProjectNotionPageToDTO)
}

export default getAllProjects
