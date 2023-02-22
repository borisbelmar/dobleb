import axios from 'axios'
import { Project } from '../@types/Project'

const baseHost = process.env.NEXT_PUBLIC_API_BASE_URL

const projectsClient = axios.create({
  baseURL: `${baseHost}/api/projects`
})

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await projectsClient.get('/')
  return response.data
}

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const response = await projectsClient.get(`/${slug}`)
  return response.data
}

export const getFeaturedProjects = async (): Promise<Project[]> => {
  const response = await projectsClient.get('/?featured=1')
  return response.data
}
