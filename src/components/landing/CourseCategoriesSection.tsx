import type { CourseCategory } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { FeatureCard } from '../ui/FeatureCard'
import { SectionHeading } from '../ui/SectionHeading'

interface CourseCategoriesSectionProps {
  categories: CourseCategory[]
}

export function CourseCategoriesSection({
  categories,
}: CourseCategoriesSectionProps) {
  return (
    <SectionShell id="cursos" surface="muted" className="section-grid">
      <SectionHeading
        eyebrow="Oferta formativa"
        title="Areas clave de capacitacion"
        description="Programas disenados para responder a necesidades reales de seguridad, prevencion y cultura organizacional."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <FeatureCard
            key={category.title}
            description={category.description}
            icon={category.icon}
            tag={category.tag}
            title={category.title}
          />
        ))}
      </div>
    </SectionShell>
  )
}
