import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/Copie de Fichier 5.png"
            alt="Meriaz — Votre partenaire technologique"
            width={32}
            height={32}
            className="rounded"
            priority
          />
          <span className="font-semibold">Meriaz</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <Link href="#services">Services</Link>
          <Link href="#valeurs">Pourquoi Meriaz</Link>
          <Link href="#technologies">Technologies</Link>
          <Link href="#process">Processus</Link>
          <Link href="#references">Références</Link>
          <Link href="#contact" className="btn-secondary">Demander un devis</Link>
          <a href="https://wa.me/237620275758" target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
