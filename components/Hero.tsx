import { hero, metrics } from '@lib/constants'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-primary-alt/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-6">{hero.title}</h1>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">{hero.subtitle}</h2>
          <p className="text-slate-600 mb-6">{hero.description}</p>
          <ul className="space-y-2 mb-8">
            {hero.bullets.map(b => (
              <li key={b} className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <a href={hero.primaryCta.href} className="btn-primary">{hero.primaryCta.text}</a>
            <a href={hero.secondaryCta.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {hero.secondaryCta.text}
            </a>
          </div>
        </div>
        <div className="h-[420px] rounded-2xl bg-white shadow-xl border flex items-center justify-center">
          <div className="text-slate-400">1200×700 image hero</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-3 gap-6">
          {metrics.map(m => (
            <div key={m.label} className="rounded-xl bg-white shadow p-6 text-center">
              <div className="text-3xl font-bold text-slate-900">{m.value}</div>
              <div className="text-sm text-slate-600">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-xl bg-gradient-to-r from-secondary to-secondary-dark text-white p-6 text-center">
          <span className="font-semibold">Opération « Tout le monde, son site internet »</span>
          <span className="ml-2">À partir de 30 000 XAF</span>
        </div>
      </div>
    </section>
  )
}
