import useDateFnsLocale from '@/frontend/hooks/useDateFnsLocale'
import getBlurredImage from '@/frontend/utils/getBlurredImage'
import { format } from 'date-fns'
import Image from 'next/image'
import { Markdown } from '../common'
import About from '../common/About/About'
import { Container } from '../layouts'

interface Props {
  title: string
  featuredImage: string
  date: string
  content: string
}

export default function ArticleContent({
  title,
  featuredImage,
  date,
  content
}: Props) {
  const localeDate = useDateFnsLocale()
  const dateFormatted = format(new Date(date), 'PP', { locale: localeDate })

  return (
    <article className="">
      <div className="relative h-96">
        <Image
          src={featuredImage}
          alt={title}
          className="absolute inset-0 z-0 object-cover object-top"
          placeholder="blur"
          fill
          blurDataURL={getBlurredImage(featuredImage)}
        />
        <div className="absolute inset-0 z-10 bg-black bg-opacity-70 duration-200">
          <div className="absolute inset-8 flex flex-col items-center justify-center p-4 text-center">
            <h1 className="font-bold text-3xl text-primary-50">
              {title}
            </h1>
            <p className="font-light text-lg text-primary-500">
              {dateFormatted}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Container className="prose-xl pb-24 pt-16">
          <Markdown className="w-full" content={content} />
        </Container>
        <Container>
          <hr className="border-primary-500" />
        </Container>
        <About />
      </div>
    </article>
  )
}
