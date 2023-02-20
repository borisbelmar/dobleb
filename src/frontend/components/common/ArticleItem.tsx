import getBlurredImage from '@/frontend/utils/getBlurredImage'
import { format } from 'date-fns'
import Image from 'next/image'
import ParallaxTilt from 'react-parallax-tilt'
import useDateFnsLocale from '@/frontend/hooks/useDateFnsLocale'

interface Props {
  title: string
  featuredImage: string
  date: string
  description: string
  tags: string[]
}

export default function ArticleItem({
  title,
  featuredImage,
  date,
  description,
  tags
}: Props) {
  const locale = useDateFnsLocale()
  const formattedDate = format(new Date(date), 'PP', { locale })

  return (
    <ParallaxTilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="bg-primary-50 dark:bg-dark-primary-800 rounded-lg shadow-xl">
      <div className="relative aspect-video rounded-t-lg overflow-hidden">
        <div className="absolute z-10 top-3 left-3 bg-primary-500 px-2 py-1 rounded-md">
          <p className="text-dark-primary-900 text-xs">
            {formattedDate}
          </p>
        </div>
        <Image
          src={featuredImage}
          alt={title}
          className="absolute inset-0 z-0 object-cover object-right sm:object-right"
          placeholder="blur"
          fill
          blurDataURL={getBlurredImage(featuredImage)}
        />
      </div>
      <div className="p-4 pt-3">
        <h3 className="text-lg font-bold text-dark-primary-900 mb-1 dark:text-primary-50 leading-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs text-dark-primary-500 dark:text-dark-primary-800 bg-primary-200 dark:bg-primary-500 px-1 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ParallaxTilt>
  )
}
