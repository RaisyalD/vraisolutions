import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/content'

function useCountUp(end, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, end, duration])

  return count
}

function StatItem({ stat }) {
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  const count = useCountUp(stat.end, 1600, active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-display-lg text-headline-lg font-bold tabular-nums">
        {count}{stat.suffix}
      </span>
      <span className="font-label-sm text-label-sm uppercase">{stat.label}</span>
    </div>
  )
}

export default function TrustBar() {
  return (
    <section className="py-section-gap-md border-y border-outline-variant bg-surface-container-lowest/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-center font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-12">
          Trusted by Students, Organizations, &amp; Businesses
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
