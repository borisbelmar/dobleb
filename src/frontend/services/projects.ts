import axios from 'axios'
import { Project } from '../@types/Project'

const projectsClient = axios.create({
  baseURL: 'http://localhost:8080/api/projects'
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
