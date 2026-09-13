'use client'

import { motion } from 'framer-motion'

const partners = ['Nike', 'adidas', 'PUMA', 'Red Bull', 'Spotify', 'YouTube']

export function Partners() {
  return (
    <section className="border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Selected collaborators</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => <motion.div key={partner} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex min-h-28 items-center border-b border-r border-white/10 px-5 text-xl font-semibold tracking-[-0.04em] text-white/65 transition-colors hover:bg-white hover:text-black sm:min-h-36 sm:px-7 sm:text-2xl">{partner}</motion.div>)}
        </motion.div>
      </div>
    </section>
  )
}
