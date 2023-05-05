import { Locale, format } from 'date-fns'

export default function formatArticleDate(date: string, locale: Locale): string {
  const [year, month, day] = date.split('-').map(Number)
  const dateObject = new Date(year, month - 1, day)
  return format(dateObject, 'PP', { locale })
}
