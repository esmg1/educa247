import type { AboutSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'
export function AboutSection({ section }: { section: AboutSectionData }) {
  return (
    <SectionShell id="quienes-somos" surface="sand">
      <div className="about-grid">
        <div>
          <SectionHeading
            eyebrow="Conoce EDUCA 24/7"
            title={section.title}
            description={section.description}
          />
          <div className="about-facts">
            {section.highlights.map((h) => (
              <div key={h.label}>
                <h.icon size={22} />
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-images">
          <img
            src={section.primaryImageSrc}
            alt={section.primaryImageAlt}
            loading="lazy"
          />
          <img
            src={section.secondaryImageSrc}
            alt={section.secondaryImageAlt}
            loading="lazy"
          />
        </div>
      </div>
      <div className="team-heading">
        <p className="eyebrow">Nuestro equipo</p>
        <h3>Experiencia técnica y visión académica.</h3>
        <p>
          Personas que conectan la operación, el aprendizaje y el desarrollo
          profesional.
        </p>
      </div>
      <div className="team-grid">
        {section.teamMembers.map((member) => (
          <article className="team-card" key={member.name}>
            <span className="team-avatar" aria-hidden="true">
              {member.name
                .split(' ')
                .map((p) => p[0])
                .join('')
                .slice(0, 2)}
            </span>
            <h4>{member.name}</h4>
            <p className="team-role">{member.role}</p>
            <p>{member.summary}</p>
          </article>
        ))}
      </div>
      <div className="sector-list">
        <span>Sectores que atendemos</span>
        {section.sectors.map((sector) => (
          <span key={sector}>{sector}</span>
        ))}
      </div>
    </SectionShell>
  )
}
