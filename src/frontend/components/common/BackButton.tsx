import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function BackButton() {
  const { back, route } = useRouter()
  const [mustShow, setMustShow] = useState(false)

  useEffect(() => {
    setMustShow(route !== '/' && window.history.length > 1)
  }, [route])

  if (!mustShow) return null

  return (
    <button
      className="fixed right-5 bottom-5 flex items-center justify-center rounded py-1 px-2 bg-gray-200 dark:bg-primary-500 hover:bg-gray-300 dark:hover:bg-primary-700 transition-colors"
      onClick={back}
    >
      <svg
        className="w-3 h-3 text-gray-600 dark:text-gray-50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span className="ml-1 text-xs">
        Back
      </span>
    </button>
  )
}
