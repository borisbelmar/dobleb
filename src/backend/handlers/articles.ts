import type { NextApiRequest, NextApiResponse } from 'next'
import getAllArticles from '../controllers/articles/getAllArticles'
import getArticleBySlug from '../controllers/articles/getArticleBySlug'
import type { ArticleDTO } from '../models/Article'

export const getAllArticlesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ArticleDTO[]>
): Promise<void> => {
  const { featured } = req.query
  const articles = await getAllArticles(featured === '1')
  res.status(200).json(articles)
}

export const getArticleBySlugHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ArticleDTO>
): Promise<void> => {
  const article = await getArticleBySlug(req.query.slug as string)

  if (article) {
    res.status(200).json(article)
  } else {
    res.status(404).end()
  }
}
