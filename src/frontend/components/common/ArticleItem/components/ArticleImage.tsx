import Image from 'next/image'
import DateTag from './DateTag'

interface Props {
  title: string
  featuredImage: string
  date: string
}

export default function ArticleImage({
  title,
  featuredImage,
  date
}: Props) {
  return (
    <div className="relative aspect-video rounded-t-lg overflow-hidden">
      <DateTag date={date} />
      <Image
        src={featuredImage}
        alt={title}
        className="absolute inset-0 z-0 object-cover object-right sm:object-right"
        fill
      />
    </div>
  )
}
