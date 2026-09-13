'use client'

import { ArrowDown, ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Hero() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 700], [0, 120])

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-black pb-16 pt-32 sm:pb-20 lg:pb-24">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-16 bg-[url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=2400&q=90')] bg-cover bg-[center_35%] opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/35" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:80px_80px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-5xl">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55 sm:text-[11px]"><span className="h-px w-8 bg-white/60" />Independent sports, media & experiences</p>
          <h1 className="max-w-4xl text-[clamp(3.5rem,10vw,9.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.075em] text-white">The future<br />of sport<br /><span className="text-white/45">starts here.</span></h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.7 }} className="mt-8 max-w-md text-base font-light leading-relaxed text-white/65 sm:text-lg">Knuckleball builds sports properties, media and experiences for the next generation.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]">Explore Knuckleball <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
            <a href="#sports" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10">Our Sports <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
          </motion.div>
        </motion.div>
        <div className="mt-20 flex items-center justify-between border-t border-white/15 pt-4 text-[10px] uppercase tracking-[0.25em] text-white/40"><span>01 / 04</span><span className="hidden sm:block">Built for what&apos;s next</span><span className="flex items-center gap-2"><ArrowDown size={13} /> Scroll to explore</span></div>
      </div>
    </section>
  )
}
