import React, { useState, useEffect, useRef } from 'react'
import './FadeInSection.css'

function FadeInSection({ children }) {
    const [isVisible, setVisible] = useState(true)
    const domRef = useRef()

    useEffect(() => {
      const dom = domRef.current
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(entry.isIntersecting))
          })
    
      observer.observe(dom)
      return () => observer.unobserve(dom)
    }, [])

    return (
      <div ref={domRef} className={`fade-in-section ${isVisible && 'is-visible'}`}>
        { children }
      </div>
    )
  }

  export default FadeInSection