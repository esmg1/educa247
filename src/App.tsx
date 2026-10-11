import { FAQSection } from './components/landing/FAQSection'
import { ConsultingSection } from './components/landing/ConsultingSection'
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
  heroBanner,
  navLinks,
  serviceOverviewCards,
  virtualCoursesSection,
} from './data/landingContent'

function App() {
  return (
    <div className="min-h-screen bg-educa-cloud text-educa-ink">
      <SiteHeader navLinks={navLinks} />
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <main id="contenido">
        <HeroSection banner={heroBanner} />
        <VirtualCoursesSection section={virtualCoursesSection} />
        <ServicesSection services={serviceOverviewCards} />
        <ConsultingSection />
        {catalogSections.map((section) => (
          <CatalogSection key={section.id} section={section} />
        ))}
        <AboutSection section={aboutSection} />
        <VisualShowcaseSection section={blogSection} />
        <VisualShowcaseSection section={downloadSection} />
        <FAQSection />
        <FinalCTASection contactDetails={contactDetails} />
      </main>
      <SiteFooter contactDetails={contactDetails} navLinks={navLinks} />
    </div>
  )
}

export default App
