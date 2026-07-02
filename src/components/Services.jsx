import { services } from '../data/content'
import SpotlightCard from './SpotlightCard'

export default function Services() {
  return (
    <section id="services" className="py-section-gap-lg px-margin-mobile md:px-margin-desktop bg-black">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-gradient mb-4">
              Comprehensive Solutions
            </h2>
            <p className="font-body-lg text-body-lg text-on-secondary-container">
              From complex algorithm development to meticulous academic research, our diverse
              expertise covers the entire spectrum of digital and technology services.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-primary font-label-md text-label-md hover:underline mb-2"
          >
            Browse all services{' '}
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <SpotlightCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
