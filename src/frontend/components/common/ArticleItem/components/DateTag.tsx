import useDateFnsLocale from '@/frontend/hooks/useDateFnsLocale'
import formatArticleDate from '@/frontend/utils/formatArticleDate'

interface Props {
  date: string
}

export default function DateTag({ date }: Props) {
  const locale = useDateFnsLocale()
  const formattedDate = formatArticleDate(date, locale)

  return (
    <div className="absolute z-10 top-3 left-3 bg-primary-500 px-2 py-1 rounded-md">
      <p className="text-dark-primary-900 text-xs">
        {formattedDate}
      </p>
    </div>
  )
}
