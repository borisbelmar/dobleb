import path from 'path'
import { readdir } from 'fs/promises'
import getMarkdownContent from './getMarkdownContent'

interface MarkdownContent {
  slug: string
  data: Record<string, unknown>
  content: string
}

export default async function getAllMarkdownContent(
  entity: string
): Promise<MarkdownContent[]> {
  const docsDir = path.join(process.cwd(), 'src', 'backend', 'docs', entity)
  const files = await readdir(docsDir)

  if (files.length <= 0) {
    return []
  }

  const markdownContents = await Promise.all(
    files.map(async file => {
      if (!file.endsWith('.md')) {
        return null
      }
      const mdContent = await getMarkdownContent(file.replace('.md', ''), entity)
      return mdContent
    })
  )

  return markdownContents.filter(item => item !== null) as MarkdownContent[]
}
