import getDoblebNotionClient from '@/backend/services/DoblebNotionClient'
import { mapProjectNotionPageToDTO, ProjectDTO } from '../../models/Project'

const getAllProjects = async (featured?: boolean): Promise<ProjectDTO[]> => {
  const { query } = getDoblebNotionClient('projects')

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
        property: 'year',
        direction: 'descending'
      }
    ]
  })

  return response.map(mapProjectNotionPageToDTO)
}

export default getAllProjects
