import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSmoothScroll = (e, href) => {
    if (href === '#') return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
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
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className={
              link.href === '#'
                ? 'text-primary font-bold border-b border-primary font-label-md text-label-md'
                : 'text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-300'
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md font-bold electric-glow hover:scale-105 transition-transform duration-200">
        Start a Project
      </button>
    </header>
  )
}
