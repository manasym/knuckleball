'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const roles = ['Creative Director', 'Partnerships Lead', 'Production Producer']

export function Careers() {
  return (
    <section id="careers" className="border-t border-white/10 bg-black px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Careers</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.055em] text-white sm:text-6xl">Build what comes next.</h2>
          </motion.div>
          <div className="border-t border-white/15">
            {roles.map((role, index) => (
              <motion.a key={role} href="#contact" initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group flex items-center justify-between border-b border-white/10 py-6 text-lg text-white/70 transition-colors hover:text-white sm:text-2xl">
                <span>{role}</span><ArrowUpRight size={18} className="text-white/35 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
              </motion.a>
            ))}
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black">View open roles <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
