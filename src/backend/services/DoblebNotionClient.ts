import { Client } from '@notionhq/client'
import { NOTION_API_KEY, NOTION_DATABASES_IDS } from '../config/constants'

export default function getDoblebNotionClient(database: string) {
  const client = new Client({
    auth: NOTION_API_KEY
  })

  const databaseId = NOTION_DATABASES_IDS[database]

  if (!databaseId) {
    throw new Error(`Database ${database} not found`)
  }

  // TODO: Type this function well
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query = async (options: any): Promise<any> => {
    const response = await client.databases.query({
      database_id: databaseId,
      ...options
    })

    return response.results
  }

  return {
    client,
    query
  }
}
