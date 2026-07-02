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
          <h2 className="font-headline-lg text-headline-lg text-gradient mb-10 leading-tight">
            Why Clients Choose Vrai Solutions
          </h2>
          <div className="flex flex-col divide-y divide-white/10">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5 py-7 group">
                {/* Material icon */}
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">{feature.icon}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-bold uppercase tracking-widest text-xs text-primary">
                    {feature.tag}
                  </span>
                  <h4 className="font-headline-md text-white">{feature.title}</h4>
                  <p className="text-on-secondary-container text-body-md leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Logo card with quote */}
        <div className="relative">
          <div className="aspect-square rounded-full bg-primary/20 blur-[120px] absolute inset-0 -z-10" />
          <div className="glass-card p-12 rounded-[48px] premium-border relative">
            <img
              src={logoImage}
              alt="Vrai Solutions Logo"
              className="w-full h-auto rounded-3xl mb-8"
            />
            <div className="border-t border-white/10 pt-8 mt-8">
              <p className="text-on-secondary-container text-body-md italic leading-relaxed text-center">
                "Trusted by students, organizations, and businesses for delivering reliable digital
                and technology solutions with professional support."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
