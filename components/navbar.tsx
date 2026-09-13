'use client'

import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = ['Sports', 'Media', 'Commerce', 'About', 'Partners']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-white/10 bg-black/65 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <a href="#top" className="text-[13px] font-bold tracking-[0.2em] text-white" aria-label="Knuckleball home">KNUCKLEBALL</a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-[12px] font-medium tracking-wide text-white/60 transition-colors hover:text-white">{link}</a>)}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-[12px] font-medium text-white transition-all hover:border-white hover:bg-white hover:text-black sm:flex">Contact <ArrowUpRight size={13} strokeWidth={1.5} /></a>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-black/95 px-5 pb-7 pt-4 backdrop-blur-xl md:hidden"><div className="flex flex-col gap-5">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg text-white/75">{link}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center gap-2 text-lg text-white">Contact <ArrowUpRight size={17} /></a></div></div>}
    </header>
  )
}
