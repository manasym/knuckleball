import { ArrowUpRight } from 'lucide-react'

const columns = [
  { title: 'Explore', links: [['Sports', '#sports'], ['Media', '#media'], ['Commerce', '#commerce'], ['About', '#about']] },
  { title: 'Connect', links: [['Partners', '#partners'], ['Newsroom', '#newsroom'], ['Careers', '#careers'], ['Contact', '#contact']] },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 sm:grid-cols-[1fr_auto_auto] sm:gap-20">
          <div><a href="#top" className="text-[13px] font-bold tracking-[0.2em] text-white">KNUCKLEBALL</a><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">Building the next generation of sport, culture, and connection.</p></div>
          {columns.map((column) => <div key={column.title}><p className="text-[10px] uppercase tracking-[0.25em] text-white/35">{column.title}</p><div className="mt-5 flex flex-col gap-3">{column.links.map(([label, href]) => <a key={label} href={href} className="text-sm text-white/60 transition-colors hover:text-white">{label}</a>)}</div></div>)}
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/30 sm:flex-row"><span>© {new Date().getFullYear()} Knuckleball</span><a href="mailto:hello@knuckleball.in" className="inline-flex items-center gap-2 hover:text-white">hello@knuckleball.in <ArrowUpRight size={12} /></a></div>
      </div>
    </footer>
  )
}
