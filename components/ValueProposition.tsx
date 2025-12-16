import { valueProps } from '@lib/constants'
import * as Icons from 'lucide-react'

export default function ValueProposition() {
  return (
    <section id="valeurs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10">Pourquoi choisir Meriaz comme partenaire technologique ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProps.map(v => {
            const Icon = (Icons as any)[v.icon] || Icons.Sparkles
            return (
              <div key={v.title} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="font-semibold">{v.title}</span>
                </div>
                <p className="text-slate-600">{v.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
