import ContentTag from './ContentTag'

interface Props {
  title: string
  description: string
  tags: string[]
}

export default function ArticleItemContent({
  title,
  description,
  tags
}: Props) {
  return (
    <div className="p-4 pt-3">
      <h3 className="text-lg font-bold text-dark-primary-900 mb-1 dark:text-primary-50 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map(tag => (
            <ContentTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
