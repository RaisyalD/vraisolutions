import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home',      href: '#',         section: '' },
  { label: 'Services',  href: '#services',  section: 'services' },
  { label: 'Portfolio', href: '#portfolio', section: 'portfolio' },
  { label: 'About',     href: '#about',     section: 'about' },
  { label: 'Contact',   href: '#contact',   section: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [activeSection, setActive]  = useState('')

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section).filter(Boolean)
    const observers  = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    // When at very top → highlight Home
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (window.scrollY < 80) setActive('')
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleClick = (e, link) => {
    if (link.href === '#') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActive('')
      return
    }
    e.preventDefault()
    const target = document.querySelector(link.href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setActive(link.section)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-gutter max-w-container-max mx-auto rounded-full bg-black/70 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 ${
        scrolled ? 'py-2 mt-2' : 'py-4 mt-4 md:mt-4 mt-margin-mobile'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
          Vrai Solutions
        </span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.section
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link)}
              className={`font-label-md text-label-md transition-colors duration-300 ${
                isActive
                  ? 'text-primary font-bold border-b border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* CTA Button */}
      <button
        onClick={(e) => {
          e.preventDefault()
          const target = document.querySelector('#contact')
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
            setActive('contact')
          }
        }}
        className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md font-bold electric-glow hover:scale-105 transition-transform duration-200"
      >
        Start a Project
      </button>
    </header>
  )
}
