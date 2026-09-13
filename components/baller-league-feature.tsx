'use client'

import { motion } from 'framer-motion'

const features = [
  ['01', 'Matches', 'High-intensity 5-a-side formats, zero dead time, custom rules engineered for high drama.'],
  ['02', 'Players', 'Elite grassroots athletes, creators, and ballers elevated to cultural icons.'],
  ['03', 'Teams', 'Independent team brands, custom kits, and localized rivalries.'],
  ['04', 'Telemetry & stats', 'Real-time match data, player analytics, and live leaderboard tracking.'],
  ['05', 'Behind the scenes', 'Unfiltered access, player mics, locker room access, and post-match reaction.'],
]

export function BallerLeagueFeature() {
  return (
    <section id="league" className="border-t border-white/10 bg-black px-5 py-32 sm:px-8 lg:px-12" aria-labelledby="league-heading">
      <div className="mx-auto max-w-[1440px]">
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">The Baller League</p>
          <h2 id="league-heading" className="max-w-4xl text-[clamp(4rem,12vw,12rem)] font-semibold uppercase leading-[0.78] tracking-[-0.09em]">Football.<br /><span className="text-white/35">Reimagined.</span></h2>
        </motion.div>

        <div className="mt-20 lg:sticky lg:top-24">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35"><span>Product deep-dive</span><span>05 systems</span></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(([number, title, description], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 28, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: index * 0.08 }} className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden border border-white/10 bg-neutral-950/60 p-5 backdrop-blur-md transition-colors hover:border-white/30 sm:min-h-[400px] lg:min-h-[470px]">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent opacity-60" />
                <div className="relative flex items-start justify-between"><span className="font-mono text-xs text-white/45">{number}</span><span className="h-2 w-2 rounded-full bg-white/30 transition-colors group-hover:bg-white" /></div>
                <div className="relative"><h3 className="mb-4 text-2xl font-medium uppercase leading-[0.9] tracking-[-0.06em]">{title}</h3><p className="text-sm leading-relaxed text-white/50">{description}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
