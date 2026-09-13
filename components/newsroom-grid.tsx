'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const stories = [
  { category: 'News', title: 'Knuckleball announces the next chapter of live sport', image: '/baller-league.png' },
  { category: 'Field Notes', title: 'Why the best stories start after dark', image: '/grassroots-football.png' },
  { category: 'Culture', title: 'The people shaping the future of the game', image: '/gear-apparel.png' },
]

export function NewsroomGrid() {
  return (
    <section id="newsroom" className="border-t border-white/10 bg-black px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Newsroom</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-white sm:text-6xl">In the world.</h2></div><a href="#contact" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">View all stories <ArrowUpRight size={15} /></a></div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">{stories.map((story, index) => <motion.a href="#contact" key={story.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="group"><div className="relative aspect-[1.18] overflow-hidden bg-white/5"><img src={story.image} alt="" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /></div><p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-white/40">{story.category}</p><h3 className="mt-3 max-w-sm text-xl font-medium leading-tight text-white/85 transition-colors group-hover:text-white">{story.title}</h3></motion.a>)}</div>
      </div>
    </section>
  )
}
