'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

import Corner from '../common/corner'

export default function Header() {
  const headerRef = useRef(null)
  const headerTwin = useRef<gsap.core.Tween | null>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    headerTwin.current = gsap
      .from(headerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.4,
        ease: 'power2.out',
      })
      .progress(1)

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        self.direction === -1
          ? headerTwin.current!.play()
          : headerTwin.current!.reverse()
      },
    })
  })

  return (
    <header
      ref={headerRef}
      className="fixed left-0 top-0 w-full bg-primary p-3 text-primary-foreground"
    >
      <Corner className="absolute -bottom-2.5 left-1.5 rotate-90" />
      <Corner className="absolute -bottom-2.5 right-1.5 rotate-180" />
      Header
    </header>
  )
}
