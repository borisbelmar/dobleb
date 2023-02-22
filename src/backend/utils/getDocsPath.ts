import path from 'path'

export default function getEntityDocsPath(entity: string): string {
  return path.join(process.cwd(), 'src', 'backend', 'docs', entity)
}
