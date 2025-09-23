import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 👈 smooth scrolling
    })
  }, [pathname])

  return null // this component doesn't render anything
}
