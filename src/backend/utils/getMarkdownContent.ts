import { readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { MarkdownContent } from '../models/MarkdownContent'
import getEntityDocsPath from './getDocsPath'

export default async function getMarkdownContent(
  slug: string,
  entity: string
): Promise<MarkdownContent | null> {
  const docsPath = getEntityDocsPath(entity)
  const filePath = path.join(docsPath, `${slug}.md`)
  try {
    const fileContent = await readFile(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      data,
      content
    }
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return null
    }
    throw error
  }
}
