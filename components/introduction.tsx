'use client'

import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export function Introduction() {
  return (
    <section id="about" className="border-t border-white/10 bg-black px-5 py-32 sm:px-8 lg:px-12" aria-labelledby="introduction-heading">
      <div className="mx-auto max-w-[1440px]">
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mb-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">Knuckleball</motion.p>
        <motion.h2 id="introduction-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl text-[clamp(3.1rem,8.6vw,8.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.075em] text-white">We don&apos;t just<br />run leagues.<br />We build<br /><span className="text-white/40">sports culture.</span></motion.h2>
        <div className="mt-20 grid gap-12 border-t border-white/10 pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-20 lg:mt-28 lg:pt-10">
          <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-xl text-xl font-light leading-[1.2] tracking-tight text-white/75 sm:text-3xl">Knuckleball operates across sports properties, media networks, commerce and digital entertainment ecosystems — creating the places where the next generation comes to play, watch and belong.</motion.p>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-sm self-end text-sm leading-relaxed text-white/45"><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">Our mission</p><p>To transform how athletes and fans engage with sport, starting in India and moving everywhere culture is being rewritten.</p></motion.div>
        </div>
      </div>
    </section>
  )
}
