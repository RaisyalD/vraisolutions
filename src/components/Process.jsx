import { processSteps } from '../data/content'

export default function Process() {
  return (
    <section className="py-section-gap-lg px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="font-headline-lg text-headline-lg text-gradient mb-4">
            The Pathway to Precision
          </h2>
          <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl mx-auto">
            A streamlined, rigorous process designed to ensure every project exceeds expectations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row justify-between gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-outline-variant z-0" />

          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative z-10 flex-1 text-center flex flex-col items-center"
            >
              <div
                className={`w-24 h-24 rounded-full glass-card flex items-center justify-center mb-6 relative bg-black ${
                  step.glow ? 'electric-glow' : ''
                }`}
              >
                <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                  {step.step}
                </div>
              </div>
              <h4 className="font-headline-md text-white mb-2">{step.title}</h4>
              <p className="text-on-secondary-container text-body-md">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
