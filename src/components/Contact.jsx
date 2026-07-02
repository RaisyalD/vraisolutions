import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('https://formsubmit.co/ajax/vrai.solutions26@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          _subject: `[VRAI Solutions] New inquiry from ${form.name}`,
          _template: 'table',
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', service: 'Web Development', message: '' })
      }
    } catch {
      // silent — user still sees button to retry
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-section-gap-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Contact info */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-gradient mb-6">
              Let's Build Something <br /> Extraordinary
            </h2>
            <p className="font-body-lg text-body-lg text-on-secondary-container mb-12">
              Whether you're a student tackling a complex thesis or a business aiming for digital
              dominance, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-on-surface-variant font-label-sm uppercase tracking-widest">
                    Email Us
                  </p>
                  <p className="text-white font-headline-md">vrai.solutions26@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-on-surface-variant font-label-sm uppercase tracking-widest">
                    Global HQ
                  </p>
                  <p className="text-white font-headline-md">Purwakarta, West Java</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card p-10 rounded-[32px]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="font-headline-md text-white">Message Sent!</h3>
                <p className="text-on-secondary-container font-body-md max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-primary font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-on-surface-variant">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Kang Isal"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-on-surface-variant">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="kangisal@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-on-surface-variant">Service Required</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                  >
                    <option className="bg-black">Web Development</option>
                    <option className="bg-black">MATLAB Processing</option>
                    <option className="bg-black">Academic Assistance</option>
                    <option className="bg-black">Research &amp; Data Analytics</option>
                    <option className="bg-black">UI/UX Design</option>
                    <option className="bg-black">Journal Help</option>
                    <option className="bg-black">Presentation Design</option>
                    <option className="bg-black">Other Services</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-on-surface-variant">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold electric-glow hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-base">
                        progress_activity
                      </span>
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
