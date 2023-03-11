import ParallaxTilt from 'react-parallax-tilt'
import Link from 'next/link'
import ArticleImage from './components/ArticleImage'
import ArticleItemContent from './components/ArticleItemContent'

interface Props {
  title: string
  slug: string
  featuredImage: string
  date: string
  description: string
  tags: string[]
}

export default function ArticleItem({
  title,
  slug,
  featuredImage,
  date,
  description,
  tags
}: Props) {
  return (
    <Link href={`/articles/${slug}`}>
      <ParallaxTilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="bg-primary-50 dark:bg-dark-primary-800 rounded-lg shadow-xl">
        <ArticleImage
          title={title}
          featuredImage={featuredImage}
          date={date}
        />
        <ArticleItemContent
          title={title}
          description={description}
          tags={tags}
        />
      </ParallaxTilt>
    </Link>
  )
}
