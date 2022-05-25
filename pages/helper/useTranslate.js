import { useRouter } from 'next/router'
import en from '../../public/locales/en/en'
import pt from '../../public/locales/pt/pt'

const useTranslate = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  return t
}

export default useTranslate
