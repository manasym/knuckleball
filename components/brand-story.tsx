'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function BrandStory() {
  return (
    <section id="about" className="border-t border-white/10 bg-black px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Our story</p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-8 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">Built from the feeling of the game.</motion.h2>
        </div>
        <div className="max-w-2xl lg:pt-16">
          <p className="text-xl font-light leading-relaxed text-white/65 sm:text-2xl">We started Knuckleball because sport deserves more than a scoreboard. It deserves stories, places, communities and a point of view that feels true to the people who make it matter.</p>
          <p className="mt-7 text-base font-light leading-relaxed text-white/45">From the first kick on a neighborhood pitch to the lights of a sold-out final, we build the worlds around sport that make people care, return and belong.</p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-white/60">The long game <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}
