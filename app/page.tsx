import Header from '@components/Header'
import Hero from '@components/Hero'
import ServicesSection from '@components/ServicesSection'
import ValueProposition from '@components/ValueProposition'
import ProcessSteps from '@components/ProcessSteps'
import Footer from '@components/Footer'
import { techs } from '@lib/constants'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesSection />
      <ValueProposition />
      <section id="technologies" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Une équipe technique solide, des technologies modernes</h2>
          <p className="text-slate-600 mb-8">Nous utilisons des technologies modernes, robustes et adaptées aux besoins des entreprises africaines et internationales.</p>
          <div className="flex flex-wrap gap-3">
            {techs.map(t => (
              <div key={t} className="px-4 py-2 rounded-full bg-white border text-slate-700">{t}</div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSteps />
      <Footer />
    </main>
  )
}
