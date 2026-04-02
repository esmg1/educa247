import { GraduationCap } from 'lucide-react'

import type { LeadershipProfile } from '../../data/landingContent'
import { cn } from '../../lib/cn'
import { Badge } from './Badge'

interface ProfileCardProps {
  profile: LeadershipProfile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <article
      className={cn(
        'blueprint-panel relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,39,66,0.08)]',
        profile.featured ? 'lg:p-8 lg:shadow-panel' : 'lg:mt-10',
      )}
    >
      <div
        className={cn(
          'absolute inset-x-0 top-0 h-28',
          profile.featured
            ? 'bg-gradient-to-r from-educa-navy via-educa-blue to-slate-700'
            : 'bg-gradient-to-r from-slate-200 via-slate-100 to-slate-50',
        )}
      />
      <div className="relative">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                'flex h-20 w-20 items-center justify-center rounded-[28px] border text-2xl font-extrabold tracking-tight',
                profile.featured
                  ? 'border-white/40 bg-white/12 text-white backdrop-blur'
                  : 'border-white bg-white text-educa-navy shadow-float',
              )}
            >
              {profile.initials}
            </div>
            <div className={cn(profile.featured ? 'pt-8 text-white' : 'pt-8 text-educa-ink')}>
              <Badge variant={profile.featured ? 'amber' : 'navy'}>{profile.badge}</Badge>
            </div>
          </div>
          <div
            className={cn(
              'hidden rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] lg:block',
              profile.featured ? 'bg-white/12 text-white' : 'bg-slate-100 text-slate-600',
            )}
          >
            {profile.label}
          </div>
        </div>

        <div className={cn('mb-4', 'text-educa-ink')}>
          <h3 className="text-3xl font-extrabold tracking-tight">{profile.name}</h3>
          <p className={cn('mt-2 max-w-xl text-sm font-semibold uppercase tracking-[0.18em]', 'text-educa-slate')}>
            {profile.role}
          </p>
        </div>

        <p className={cn('max-w-2xl text-sm leading-7', 'text-educa-slate')}>
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {profile.areas.map((area) => (
            <span
              key={area}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold',
                 'border-slate-200 bg-slate-50 text-educa-slate',
              )}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
