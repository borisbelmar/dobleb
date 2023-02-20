import { es, enUS } from 'date-fns/locale'
import { useTranslation } from 'next-i18next'

export default function useDateFnsLocale() {
  const { i18n } = useTranslation()
  const locale = i18n.language

  if (locale === 'es') {
    return es
  }
  return enUS
}
