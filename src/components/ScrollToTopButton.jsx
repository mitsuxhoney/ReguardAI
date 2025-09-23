import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react' // nice up-arrow icon

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 30)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-6 bottom-6 z-50 transition-all duration-300
                  bg-reguard-red text-white p-3 rounded-full shadow-lg
                  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-reguard-red
                  ${
                    visible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
