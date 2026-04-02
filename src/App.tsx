import { CourseCategoriesSection } from './components/landing/CourseCategoriesSection'
import { EnterpriseSection } from './components/landing/EnterpriseSection'
import { FAQSection } from './components/landing/FAQSection'
import { FinalCTASection } from './components/landing/FinalCTASection'
import { HeroSection } from './components/landing/HeroSection'
import { ServicesSection } from './components/landing/ServicesSection'
import { StatsSection } from './components/landing/StatsSection'
import { TrustBar } from './components/landing/TrustBar'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import {
  contactDetails,
  enterpriseBenefits,
  faqs,
  footerGroups,
  heroFeatures,
  heroServiceChips,
  navLinks,
  programCards,
  sectorBadges,
  serviceCards,
  statItems,
} from './data/landingContent'

function App() {
  return (
    <div className="min-h-screen bg-educa-cloud text-educa-ink">
      <SiteHeader navLinks={navLinks} />
      <main>
        <HeroSection serviceChips={heroServiceChips} features={heroFeatures} />
        <ServicesSection services={serviceCards} />
        <StatsSection items={statItems} />
        <CourseCategoriesSection programs={programCards} />
        <EnterpriseSection benefits={enterpriseBenefits} />
        <TrustBar sectors={sectorBadges} />
        <FAQSection items={faqs} />
        <FinalCTASection contactDetails={contactDetails} />
      </main>
      <SiteFooter contactDetails={contactDetails} groups={footerGroups} />
    </div>
  )
}

export default App
