import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import ParallaxTilt from 'react-parallax-tilt'
import { Container } from '../layouts'
import About from '../common/About/About'

interface Props {
  title: string
  featuredImage: string
  year: number
  content: string
}

export default function ProjectContent({
  title,
  featuredImage,
  year,
  content
}: Props) {
  return (
    <article>
      <Container>
        <div className="flex flex-col items-center justify-center p-16 text-center">
          <h1 className="font-bold text-3xl text-dark-primary-800 dark:text-primary-50">
            {title}
          </h1>
          <p className="font-light text-lg text-primary-500">
            {year}
          </p>
        </div>
        <div className="max-w-4xl mx-auto w-full">
          <ParallaxTilt className="relative aspect-video rounded-lg overflow-hidden px-8">
            <Image
              src={featuredImage}
              alt={title}
              className="object-cover object-top"
              fill
              />
          </ParallaxTilt>
        </div>
      </Container>
      <div>
        <Container className="prose-xl pb-24 pt-16 prose-li:list-disc">
          <ReactMarkdown className="w-full">
            {content}
          </ReactMarkdown>
        </Container>
        <Container>
          <hr className="border-primary-500" />
          <About />
        </Container>
      </div>
    </article>
  )
}
