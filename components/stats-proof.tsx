'use client'

import { motion } from 'framer-motion'

const stats = [['22','TEAMS'],['176+','PLAYERS'],['100+','MATCHES'],['1','SPORTS ECOSYSTEM']]

export function StatsProof() { return <section className="border-t border-white/10 bg-black px-5 py-32 sm:px-8 lg:px-12" aria-labelledby="proof-heading"><div className="mx-auto max-w-[1440px]"><motion.p id="proof-heading" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="mb-16 font-mono text-[10px] uppercase tracking-[.3em] text-white/45">By the numbers</motion.p><div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([value,label],i)=><motion.div key={label} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.5}} transition={{duration:.65,delay:i*.1}}><p className="text-[clamp(4.5rem,10vw,9rem)] font-black leading-[.75] tracking-[-.1em] text-white">{value}</p><p className="mt-7 font-mono text-[10px] tracking-[.28em] text-white/45">{label}</p></motion.div>)}</div></div></section> }
