import { MarkdownContent } from '../models/MarkdownContent'

interface SortOptions {
  sortBy?: string
  direction: 'asc' | 'desc'
}

export default function sortContent(
  content: MarkdownContent[],
  options: SortOptions = { direction: 'desc', sortBy: 'date' }
): MarkdownContent[] {
  return [...content].sort((a, b) => {
    const { sortBy, direction } = options || {}

    if (sortBy === 'date') {
      const dateA = new Date(a.data.date as string)
      const dateB = new Date(b.data.date as string)

      if (direction === 'asc') {
        return dateA.getTime() - dateB.getTime()
      }
      return dateB.getTime() - dateA.getTime()
    }

    const paramA = a.data[sortBy as string] as string | number | boolean
    const paramB = b.data[sortBy as string] as string | number | boolean

    if (direction === 'asc') {
      return paramA > paramB ? 1 : -1
    }
    return paramA > paramB ? -1 : 1
  })
}
