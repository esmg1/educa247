import { ArrowRight, Check, Clock3, Monitor, BookOpen } from 'lucide-react'
import type { VirtualCoursesSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
const themes = [
  [
    'Derechos laborales',
    'Reconoce derechos y responsabilidades para promover un trato justo en la organización.',
  ],
  [
    'Igualdad de género',
    'Identifica estereotipos y sesgos que influyen en las oportunidades de mujeres y hombres.',
  ],
  [
    'Prevención de violencia y discriminación',
    'Comprende conductas que afectan la convivencia y refuerza una cultura de respeto.',
  ],
  [
    'Trabajo de igual valor',
    'Relaciona la equidad salarial con criterios objetivos y prácticas laborales inclusivas.',
  ],
]
export function VirtualCoursesSection({
  section,
}: {
  section: VirtualCoursesSectionData
}) {
  const course = section.featuredCourse
  const supporting = section.supportingCourse
  return (
    <SectionShell id={section.id} className="equality-section">
      <SectionHeading
        eyebrow="Programa destacado · Aula virtual"
        title={section.title}
        description={section.description}
      />
      <div className="equality-grid">
        <article className="equality-feature">
          <p className="eyebrow">{course.badge}</p>
          <h3>{course.title}</h3>
          <p className="course-subtitle">{course.subtitle}</p>
          <p>{course.description}</p>
          <div className="course-facts">
            <span>
              <Clock3 size={18} />
              40 horas
            </span>
            <span>
              <BookOpen size={18} />4 módulos
            </span>
            <span>
              <Monitor size={18} />
              Asincrónico
            </span>
          </div>
          <ul className="course-benefits">
            {course.bullets.map((b) => (
              <li key={b}>
                <Check size={17} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Button href={course.primaryCtaHref}>
            {course.primaryCtaLabel}
            <ArrowRight size={17} />
          </Button>
        </article>
        <div className="equality-topics">
          <p className="eyebrow">Ejes de aprendizaje</p>
          <h3>Igualdad que se comprende y se practica.</h3>
          {themes.map(([title, text], i) => (
            <div className="topic-row" key={title}>
              <span>0{i + 1}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <a
            className="normative-link"
            href="https://www.trabajo.gob.ec/expedimos-el-reglamento-de-cumplimiento-de-la-ley-organica-para-la-igualdad-salarial-entre-mujeres-y-hombres-2/"
            target="_blank"
            rel="noreferrer"
          >
            Consulta la referencia normativa del Ministerio del Trabajo
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <div className="courses-secondary">
        <article className="course-video">
          <div>
            <p className="eyebrow">Conoce el programa</p>
            <h3>Igualdad 2026 en un minuto</h3>
            <p>Descubre el enfoque de nuestra formación en igualdad laboral.</p>
          </div>
          <div
            className="video-frame aspect-[9/16]"
            data-testid="igualdad-video"
          >
            <iframe
              src={course.videoEmbedUrl}
              title={`Video ${course.title}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>
        <article className="supporting-course">
          <img
            src={supporting.imageSrc}
            alt={supporting.imageAlt}
            loading="lazy"
          />
          <div>
            <p className="eyebrow">{supporting.badge}</p>
            <h3>{supporting.title}</h3>
            <p>{supporting.description}</p>
            <p>{supporting.supportLine}</p>
            <a href={supporting.ctaHref} className="text-link">
              {supporting.ctaLabel}
              <ArrowRight size={16} />
            </a>
          </div>
        </article>
      </div>
    </SectionShell>
  )
}
