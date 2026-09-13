'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const products = [
  ['FOOTBALL CLEATS / TURF SHOES', 'KNUCKLEBALL PRO TURF 1', '/gear-footwear.png'],
  ['MATCH DAY KITS & APPAREL', 'SEASON 01 APPAREL', '/gear-apparel.png'],
  ['ACCESSORIES & EQUIPMENT', 'BALLER MATCH SPEC', '/gear-equipment.png'],
]

export function CommerceShowcase() {
  return <section id="gear" className="border-t border-white/10 bg-black px-5 py-32 sm:px-8 lg:px-12" aria-labelledby="gear-heading"><div className="mx-auto max-w-[1440px]"><motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.7}} className="mb-16 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="mb-6 font-mono text-[10px] uppercase tracking-[.3em] text-white/45">Commerce</p><h2 id="gear-heading" className="text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase leading-[.8] tracking-[-.08em]">Gear for<br /><span className="text-white/35">the game.</span></h2></div><p className="max-w-sm text-lg leading-relaxed text-white/55 lg:pb-2">Technical footwear, matchwear, and athletic equipment engineered for high-performance small-sided football.</p></motion.div><div className="grid gap-3 md:grid-cols-3">{products.map(([title,label,image],i)=><motion.article key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.65,delay:i*.08}} className="group relative aspect-[4/5] overflow-hidden bg-neutral-900"><img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" /><div className="relative flex h-full flex-col justify-end p-6"><p className="font-mono text-[10px] uppercase tracking-[.22em] text-white/55">0{i+1} / {title}</p><h3 className="mt-3 text-2xl font-medium uppercase leading-[.9] tracking-[-.05em]">{label}</h3></div></motion.article>)}</div><a href="#contact" className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-3 text-xs uppercase tracking-[.2em] transition hover:border-white hover:bg-white hover:text-black">Explore Gear <ArrowUpRight size={14} /></a></div></section>
}
