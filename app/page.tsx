import { BallerLeagueFeature } from '@/components/baller-league-feature'
import { BrandStory } from '@/components/brand-story'
import { Careers } from '@/components/careers'
import { CommerceShowcase } from '@/components/commerce-showcase'
import { Ecosystem } from '@/components/ecosystem'
import { FinalCTA } from '@/components/final-cta'
import { Hero } from '@/components/hero'
import { Introduction } from '@/components/introduction'
import { MediaPlaybook } from '@/components/media-playbook'
import { Navbar } from '@/components/navbar'
import { NewsroomGrid } from '@/components/newsroom-grid'
import { Partners } from '@/components/partners'
import { SiteFooter } from '@/components/site-footer'
import { SportsProperty } from '@/components/sports-property'
import { StatsProof } from '@/components/stats-proof'

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Introduction />
      <SportsProperty />
      <BallerLeagueFeature />
      <MediaPlaybook />
      <CommerceShowcase />
      <Ecosystem />
      <StatsProof />
      <BrandStory />
      <Partners />
      <NewsroomGrid />
      <Careers />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
