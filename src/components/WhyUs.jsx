import { features, logoImage } from '../data/content'

export default function WhyUs() {
  return (
    <section
      id="about"
      className="py-section-gap-lg px-margin-mobile md:px-margin-desktop bg-black"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Feature list */}
        <div>
          <h2 className="font-headline-lg text-headline-lg text-gradient mb-8 leading-tight">
            Why Industry Leaders <br /> Choose Vrai Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                  <span className="font-bold uppercase tracking-widest text-xs">{feature.tag}</span>
                </div>
                <h4 className="font-headline-md text-white">{feature.title}</h4>
                <p className="text-on-secondary-container">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Logo card with testimonial */}
        <div className="relative">
          <div className="aspect-square rounded-full bg-primary/20 blur-[120px] absolute inset-0 -z-10" />
          <div className="glass-card p-12 rounded-[48px] premium-border relative">
            <img
              src={logoImage}
              alt="Vrai Solutions Logo"
              className="w-full h-auto rounded-3xl mb-8"
            />
            <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-8">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-black bg-surface-container-high" />
                <div className="w-12 h-12 rounded-full border-2 border-black bg-primary/20" />
                <div className="w-12 h-12 rounded-full border-2 border-black bg-surface-variant" />
              </div>
              <p className="text-on-secondary-container text-body-md italic">
                "Vrai Solutions transformed our research workflow with their MATLAB expertise. Truly
                world-class."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
