import type { LeadershipProfile } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { ProfileCard } from '../ui/ProfileCard'
import { SectionHeading } from '../ui/SectionHeading'

interface LeadershipSectionProps {
  profiles: LeadershipProfile[]
}

export function LeadershipSection({ profiles }: LeadershipSectionProps) {
  return (
    <SectionShell id="equipo" surface="white">
      <SectionHeading
        eyebrow="Equipo directivo"
        title="Liderazgo academico y desarrollo profesional"
        description="Una direccion experta que integra diseno formativo, seguridad industrial y desarrollo profesional aplicado."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
    </SectionShell>
  )
}
