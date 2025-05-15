'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextoAnimado() {
  const textoRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textoRef.current) return

    gsap.fromTo(
      textoRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textoRef.current,
          start: 'top 80%', // quando o topo do elemento chega em 80% da viewport
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <h1
      ref={textoRef}
      className="text-4xl font-bold text-white text-center mt-[120vh]"
    >
      Eu apareço com o scroll 😎
    </h1>
  )
}
