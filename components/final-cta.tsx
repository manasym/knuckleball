'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section id="contact" className="relative isolate flex min-h-[72vh] items-center overflow-hidden border-t border-white/10 bg-[#090909] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.13),transparent_33%),radial-gradient(circle_at_22%_70%,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[10px] uppercase tracking-[0.28em] text-white/40">Let&apos;s build</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="mt-6 max-w-5xl text-[clamp(3.4rem,10vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.075em] text-white">The future<br />is a team sport.</motion.h2>
        <motion.a href="mailto:hello@knuckleball.in" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/80">Start a conversation <ArrowUpRight size={16} /></motion.a>
      </div>
    </section>
  )
}
