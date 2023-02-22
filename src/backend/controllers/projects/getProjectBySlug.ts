import getMarkdownContent from '@/backend/utils/getMarkdownContent'
import { mapProjectMarkdownToDTO, ProjectDTO } from '../../models/Project'

const getProjectBySlug = async (slug: string): Promise<ProjectDTO | null> => {
  const projectMarkdown = await getMarkdownContent(slug, 'projects')

  if (projectMarkdown) {
    return mapProjectMarkdownToDTO(projectMarkdown)
  }

  return null
}

export default getProjectBySlug
