import getDoblebNotionClient from '@/backend/services/DoblebNotionClient'
import { NotionToMarkdown } from 'notion-to-md'
import { mapProjectNotionPageToDTO, ProjectDTO } from '../../models/Project'

const getProjectBySlug = async (slug: string): Promise<ProjectDTO | null> => {
  const { query, client } = getDoblebNotionClient('projects')

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
    const projectDTO = mapProjectNotionPageToDTO(pageData)

    const n2m = new NotionToMarkdown({ notionClient: client })
    const markdownContent = await n2m.pageToMarkdown(pageData.id)
    const markdownString = n2m.toMarkdownString(markdownContent)

    return {
      ...projectDTO,
      content: markdownString
    }
  }

  return null
}

export default getProjectBySlug
