import getAllMarkdownContent from '@/backend/utils/getAllMarkdownContent'
import getFilteredContent from '@/backend/utils/getFilteredContent'
import sortContent from '@/backend/utils/sortContent'
import { mapProjectMarkdownToDTO, ProjectDTO } from '../../models/Project'

const getAllProjects = async (featured?: boolean): Promise<ProjectDTO[]> => {
  const projectsMarkdown = await getAllMarkdownContent('projects')

  const filteredProjects = getFilteredContent(projectsMarkdown, { featured })

  if (filteredProjects) {
    const sortedArticles = sortContent(filteredProjects, { sortBy: 'year', direction: 'desc' })
    return sortedArticles.map(mapProjectMarkdownToDTO)
  }

  return []
}

export default getAllProjects
