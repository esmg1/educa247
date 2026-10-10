import { ArrowRight, ClipboardCheck, FileCheck, RefreshCw } from 'lucide-react'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
const routes = [
  {
    icon: ClipboardCheck,
    title: 'Construir tu sistema',
    label: 'Si estás empezando',
    copy: 'Identificamos riesgos y prioridades para establecer una base de prevención adecuada a tu actividad.',
    bullets: [
      'Evaluación de la situación inicial',
      'Plan de acción y responsabilidades',
      'Estructura documental y controles',
    ],
  },
  {
    icon: FileCheck,
    title: 'Ordenar lo que ya existe',
    label: 'Si necesitas mejorar',
    copy: 'Revisamos los avances de tu organización y organizamos las acciones pendientes para cerrar brechas.',
    bullets: [
      'Revisión de documentos y registros',
      'Identificación de oportunidades de mejora',
      'Preparación de evidencias de gestión',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Dar continuidad a la gestión',
    label: 'Si buscas acompañamiento',
    copy: 'Acompañamos la actualización de tu sistema y el seguimiento de las medidas preventivas.',
    bullets: [
      'Seguimiento de acciones acordadas',
      'Actualización y control documental',
      'Coordinación de formación preventiva',
    ],
  },
]
export function ConsultingSection() {
  return (
    <SectionShell id="gestion-sst" surface="sand">
      <div className="section-top">
        <SectionHeading
          eyebrow="Asesoría en seguridad y salud en el trabajo"
          title="Tu gestión SST, con una ruta clara."
          description="El punto de partida depende de tu empresa. Revisamos el estado de la prevención y definimos un alcance de trabajo acorde a tu actividad, riesgos y necesidades."
        />
        <Button href="#contacto" variant="secondary">
          Solicitar orientación
          <ArrowRight size={17} />
        </Button>
      </div>
      <div className="route-grid">
        {routes.map((route) => (
          <article className="route-card" key={route.title}>
            <route.icon size={28} />
            <p className="eyebrow">{route.label}</p>
            <h3>{route.title}</h3>
            <p>{route.copy}</p>
            <ul>
              {route.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="workflow">
        <div>
          <p className="eyebrow">Cómo trabajamos</p>
          <h3>De la revisión a la mejora continua.</h3>
        </div>
        <ol>
          {[
            ['Diagnóstico', 'Revisamos riesgos, documentos y necesidades.'],
            ['Planificación', 'Priorizamos acciones y definimos el alcance.'],
            ['Implementación', 'Acompañamos las medidas y la formación.'],
            ['Seguimiento', 'Revisamos avances y próximos ajustes.'],
          ].map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  )
}
