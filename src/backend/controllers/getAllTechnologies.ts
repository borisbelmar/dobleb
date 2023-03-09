import { mapTechnologyNotionPageToDTO, TechnologyDTO } from '../models/Technology'
import getDoblebNotionClient from '../services/DoblebNotionClient'

export default async function getAllTechnologies(): Promise<TechnologyDTO[]> {
  const { query } = getDoblebNotionClient('technologies')

  const response = await query({})

  return response.map(mapTechnologyNotionPageToDTO)
}
