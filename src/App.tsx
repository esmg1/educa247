import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { AudiencePathsSection } from './components/landing/AudiencePathsSection'
import { CourseCategoriesSection } from './components/landing/CourseCategoriesSection'
import { EnterpriseSection } from './components/landing/EnterpriseSection'
import { FAQSection } from './components/landing/FAQSection'
import { FinalCTASection } from './components/landing/FinalCTASection'
import { HeroSection } from './components/landing/HeroSection'
import { HowItWorksSection } from './components/landing/HowItWorksSection'
import { LeadershipSection } from './components/landing/LeadershipSection'
import { PlatformBenefitsSection } from './components/landing/PlatformBenefitsSection'
import { TestimonialsSection } from './components/landing/TestimonialsSection'
import { TrustBar } from './components/landing/TrustBar'
import {
  contactDetails,
  courseCategories,
  enterpriseFeatures,
  faqs,
  footerGroups,
  heroAudienceViews,
  leadershipProfiles,
  navLinks,
  platformBenefits,
  testimonialsPlaceholders,
  trustItems,
  workflowSteps,
  audiencePaths,
} from './data/landingContent'

function App() {
  return (
    <div className="min-h-screen bg-casst-cloud text-casst-ink">
      <SiteHeader navLinks={navLinks} />
      <main>
        <HeroSection audienceViews={heroAudienceViews} />
        <TrustBar items={trustItems} />
        <AudiencePathsSection paths={audiencePaths} />
        <CourseCategoriesSection categories={courseCategories} />
        <PlatformBenefitsSection benefits={platformBenefits} />
        <HowItWorksSection steps={workflowSteps} />
        <LeadershipSection profiles={leadershipProfiles} />
        <EnterpriseSection features={enterpriseFeatures} />
        <TestimonialsSection testimonials={testimonialsPlaceholders} />
        <FAQSection items={faqs} />
        <FinalCTASection contactDetails={contactDetails} />
      </main>
      <SiteFooter contactDetails={contactDetails} groups={footerGroups} />
    </div>
  )
}

export default App
