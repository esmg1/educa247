import { CatalogSection } from './components/landing/CatalogSection'
import { ClientsSection } from './components/landing/ClientsSection'
import { FinalCTASection } from './components/landing/FinalCTASection'
import { HeroSection } from './components/landing/HeroSection'
import { ProofBandSection } from './components/landing/ProofBandSection'
import { ResourcesSection } from './components/landing/ResourcesSection'
import { ServicesSection } from './components/landing/ServicesSection'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import {
  catalogSections,
  contactDetails,
  footerPanels,
  heroPillars,
  navLinks,
  proofItems,
  resourceCards,
  serviceOverviewCards,
  trustTiles,
} from './data/landingContent'

function App() {
  return (
    <div className="min-h-screen bg-educa-cloud text-educa-ink">
      <SiteHeader navLinks={navLinks} />
      <main>
        <HeroSection pillars={heroPillars} />
        <ProofBandSection items={proofItems} />
        <ServicesSection services={serviceOverviewCards} />
        <ResourcesSection cards={resourceCards} />
        {catalogSections.map((section) => (
          <CatalogSection key={section.id} section={section} />
        ))}
        <ClientsSection items={trustTiles} />
        <FinalCTASection contactDetails={contactDetails} panels={footerPanels} />
      </main>
      <SiteFooter contactDetails={contactDetails} navLinks={navLinks} />
    </div>
  )
}

export default App
