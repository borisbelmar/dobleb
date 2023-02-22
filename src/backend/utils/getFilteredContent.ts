import { MarkdownContent } from '../models/MarkdownContent'

interface Filters {
  featured?: boolean
}

const getFilteredContent = (
  content: MarkdownContent[],
  filters: Filters
): MarkdownContent[] => {
  const { featured } = filters

  if (featured) {
    return content.filter(item => item.data.featured)
  }
  return content
}

export default getFilteredContent
