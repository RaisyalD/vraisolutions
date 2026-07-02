import { useRef } from 'react'

export default function SpotlightCard({ icon, title, description }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glass-card spotlight p-8 rounded-3xl flex flex-col gap-6 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-white">{title}</h3>
      <p className="text-on-secondary-container font-body-md text-body-md">{description}</p>
    </div>
  )
}
