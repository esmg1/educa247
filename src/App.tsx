import { AboutSection } from './components/landing/AboutSection'
import { CatalogSection } from './components/landing/CatalogSection'
import { FinalCTASection } from './components/landing/FinalCTASection'
import { HeroSection } from './components/landing/HeroSection'
import { ServicesSection } from './components/landing/ServicesSection'
import { VirtualCoursesSection } from './components/landing/VirtualCoursesSection'
import { VisualShowcaseSection } from './components/landing/VisualShowcaseSection'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import {
  aboutSection,
  blogSection,
  catalogSections,
  contactDetails,
  downloadSection,
  footerPanels,
  heroBanner,
  navLinks,
  serviceOverviewCards,
  virtualCoursesSection,
} from './data/landingContent'

function App() {
  return (
    <div className="min-h-screen bg-educa-cloud text-educa-ink">
      <SiteHeader navLinks={navLinks} />
      <main>
        <HeroSection banner={heroBanner} />
        <AboutSection section={aboutSection} />
        <ServicesSection services={serviceOverviewCards} />
        {catalogSections.map((section) => (
          <CatalogSection key={section.id} section={section} />
        ))}
        <VisualShowcaseSection section={blogSection} />
        <VirtualCoursesSection section={virtualCoursesSection} />
        <VisualShowcaseSection section={downloadSection} />
        <FinalCTASection contactDetails={contactDetails} panels={footerPanels} />
      </main>
      <SiteFooter contactDetails={contactDetails} navLinks={navLinks} />
    </div>
  )
}

export default App
