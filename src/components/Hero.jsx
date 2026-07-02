export default function Hero() {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Elevating Academic &amp; Business Excellence
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display-lg text-display-lg text-gradient mb-6 leading-tight">
          Building Digital Solutions <br className="hidden md:block" /> For The Future
        </h1>

        {/* Subheading */}
        <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl mx-auto mb-10">
          Precision-engineered software, expert research assistance, and data-driven insights
          tailored for students, organizations, and businesses worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md font-bold electric-glow hover:scale-105 transition-all">
            Start a Project
          </button>
          <button
            onClick={(e) => handleSmoothScroll(e, '#portfolio')}
            className="w-full md:w-auto bg-transparent border border-white/20 text-on-surface px-10 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-white/5 transition-all"
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-3xl">expand_more</span>
      </div>
    </section>
  )
}
