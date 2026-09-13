'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const stories = [
  ['Playbook Daily', 'Daily sports news, fast updates, and match summaries.', 'Read Daily →', 'aspect-[4/5] sm:col-span-2 sm:aspect-[16/9]'],
  ['Playbook Originals', 'Docuseries, long-form athlete stories, and behind-the-scenes films.', 'Watch Series →', 'aspect-[4/5]'],
  ['Playbook Live', 'Live match broadcasts, interactive watch parties, and real-time streaming feeds.', 'Watch Live →', 'aspect-[4/5]'],
  ['Playbook Podcasts', 'Unfiltered conversations with players, managers, and creators.', 'Listen Now →', 'aspect-[4/5]'],
  ['Playbook Rankings', 'Definitive player stats, team power rankings, and performance metrics.', 'Explore Rankings →', 'aspect-[4/5] sm:col-span-2 sm:aspect-[16/9]'],
]

export function MediaPlaybook() {
  return (
    <section id="media" className="border-t border-white/10 bg-black px-5 py-32 sm:px-8 lg:px-12" aria-labelledby="playbook-heading">
      <div className="mx-auto max-w-[1440px]">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75 }} className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div><p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">Playbook</p><h2 id="playbook-heading" className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase leading-[0.8] tracking-[-0.08em]">Sport,<br /><span className="text-white/35">told differently.</span></h2></div>
          <p className="max-w-sm text-lg leading-relaxed text-white/55 lg:pb-2">Our in-house media ecosystem capturing the culture, stories, and noise around the game.</p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map(([title, description, cta, ratio], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 28, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: index * 0.07 }} className={`group relative overflow-hidden bg-neutral-900 ${ratio}`}>
              <div className="absolute inset-0 bg-[url('/baller-league.png')] bg-cover transition duration-1000 group-hover:scale-105" style={{ backgroundPosition: `${20 + index * 17}% ${35 + index * 8}%` }} aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5" />
              <div className="relative flex h-full flex-col justify-between p-5 sm:p-7"><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">0{index + 1}</span><div><h3 className="mb-3 text-2xl font-medium uppercase leading-[0.88] tracking-[-0.06em]">{title}</h3><p className="max-w-xs text-sm leading-relaxed text-white/60">{description}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-xs font-medium transition-colors hover:border-white"><span>{cta}</span><ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
