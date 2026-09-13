'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function SportsProperty() {
  return (
    <section id="sports" className="border-t border-white/10 bg-black px-5 py-32 sm:px-8 lg:px-12" aria-labelledby="sports-heading">
      <div className="mx-auto max-w-[1440px]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mb-16 flex items-end justify-between gap-6">
          <div><p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">Sports</p><h2 id="sports-heading" className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase leading-[0.84] tracking-[-0.08em]">Built for<br /><span className="text-white/40">the game.</span></h2></div><span className="hidden pb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 sm:block">01 / 02</span>
        </motion.div>
        <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 sm:aspect-[16/9]">
          <div className="absolute inset-0 bg-[url('/baller-league.png')] bg-cover bg-[center_45%] transition-transform duration-1000 ease-out group-hover:scale-105" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-10 p-6 sm:p-10 lg:flex-row lg:items-end lg:p-14"><div className="max-w-2xl"><p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">5-a-side football | Bengaluru</p><h3 className="text-[clamp(2.5rem,7vw,7.5rem)] font-semibold uppercase leading-[0.83] tracking-[-0.07em]">The Baller<br className="sm:hidden" /> League</h3><p className="mt-6 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">Fast-paced, high-stakes 5-a-side football engineered for modern broadcast and digital culture.</p></div><a href="#contact" className="group/link inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/40 px-5 py-3 text-xs font-medium transition-colors hover:border-white hover:bg-white hover:text-black">Explore The Baller League <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" /></a></div>
        </motion.article>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col justify-between gap-5 border-b border-white/10 py-10 sm:flex-row sm:items-center"><div><p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">Coming next</p><h3 className="text-3xl font-medium uppercase tracking-[-0.05em] sm:text-5xl">Eclipse League</h3></div><p className="max-w-sm text-sm leading-relaxed text-white/45">A new format for a new generation. Future expansion properties, built without compromise.</p></motion.div>
      </div>
    </section>
  )
}
