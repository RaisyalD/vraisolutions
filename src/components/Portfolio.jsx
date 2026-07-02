import { portfolio } from '../data/content'

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-section-gap-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="font-headline-lg text-headline-lg text-gradient mb-4">
            Masterpieces in Execution
          </h2>
          <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl mx-auto">
            Explore our diverse portfolio of technical challenges met with elegant digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[32px] premium-border ${item.height} ${
                item.span === 2 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 ${
                  item.span === 2
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black via-black/40 to-transparent'
                }`}
              />

              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-10 flex flex-col gap-4 ${
                  item.span === 2 ? 'md:flex-row justify-between items-end' : ''
                }`}
              >
                <div>
                  {/* Tags */}
                  <div className={`flex gap-2 ${item.span === 2 ? 'mb-4' : ''}`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display-lg text-headline-lg text-white">{item.title}</h3>
                  <p
                    className={`text-on-secondary-container font-body-md ${
                      item.span === 2 ? 'max-w-xl' : 'line-clamp-2'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Thumb preview for single-col cards */}
                  {item.thumb && (
                    <div className="flex gap-4 mt-2">
                      <img
                        src={item.thumb}
                        alt={`${item.title} preview`}
                        className="w-32 h-20 rounded-xl border border-white/10 object-cover opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}
                </div>

                {/* CTA for wide card */}
                {item.span === 2 && (
                  <button className="mt-6 md:mt-0 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg px-8 py-3 rounded-full font-bold transition-all">
                    Explore Details{' '}
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
