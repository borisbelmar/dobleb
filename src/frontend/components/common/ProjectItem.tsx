import Image from 'next/image'
import Link from 'next/link'
import ParallaxTilt from 'react-parallax-tilt'

interface Props {
  title: string
  slug: string
  featuredImage: string
  category: string
}

export default function ProjectItem({
  title,
  slug,
  featuredImage,
  category
}: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <ParallaxTilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="bg-primary-50 dark:bg-dark-primary-900 overflow-hidden rounded-lg shadow-xl group">
        <p className="sr-only">{title}</p>
        <div className="relative aspect-video">
          <Image
            src={featuredImage}
            alt={title}
            className="absolute inset-0 z-0 object-cover object-right sm:object-right"
            fill
          />
          <div className="absolute z-10 inset-0 bg-black bg-opacity-30 md:bg-opacity-60 md:opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="absolute inset-2 flex flex-col items-start justify-end md:items-center md:justify-center p-4">
              <h3 className="font-bold text-xl text-primary-50">
                {title}
              </h3>
              <p className="font-light text-primary-500">
                {category}
              </p>
            </div>
          </div>
        </div>
      </ParallaxTilt>
    </Link>
  )
}
