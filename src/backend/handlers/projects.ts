import type { NextApiRequest, NextApiResponse } from 'next'
import getAllProjects from '../controllers/projects/getAllProjects'
import getProjectBySlug from '../controllers/projects/getProjectBySlug'
import type { ProjectDTO } from '../models/Project'

export const getAllProjectsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ProjectDTO[]>
): Promise<void> => {
  const { featured } = req.query
  const projects = await getAllProjects(featured === '1')
  res.status(200).json(projects)
}

export const getProjectBySlugHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ProjectDTO>
): Promise<void> => {
  const project = await getProjectBySlug(req.query.slug as string)
  if (project) {
    res.status(200).json(project)
  } else {
    res.status(404).end()
  }
}
