import axios from 'axios'
import { Article } from '../@types/Article'

const articlesClient = axios.create({
  baseURL: 'http://localhost:8080/api/articles'
})

export const getAllArticles = async (): Promise<Article[]> => {
  const response = await articlesClient.get('/')
  return response.data
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const response = await articlesClient.get(`/${slug}`)
  return response.data
}

export const getFeaturedArticles = async (): Promise<Article[]> => {
  const response = await articlesClient.get('/?featured=1')
  return response.data
}
