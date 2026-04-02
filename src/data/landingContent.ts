import type { LucideIcon } from 'lucide-react'
import {
  AlarmSmoke,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Cog,
  Factory,
  FileBadge2,
  Flame,
  Gauge,
  HardHat,
  LayoutDashboard,
  Lightbulb,
  RadioTower,
  ScanSearch,
  ShieldCheck,
  ShieldPlus,
  Siren,
  Sparkles,
  UsersRound,
  Wrench,
} from 'lucide-react'

export type SectionId =
  | 'inicio'
  | 'servicios'
  | 'recursos'
  | 'certificaciones'
  | 'capacitaciones'
  | 'mediciones'
  | 'asesorias'
  | 'clientes'
  | 'contacto'

export type AccentTone = 'red' | 'orange' | 'green' | 'charcoal'
export type AudienceType = 'profesionales' | 'empresas'
export type CategoryTag = 'nuevo' | 'mas-demandado' | null

export interface NavLink {
  label: string
  href: `#${SectionId}`
  children?: Array<{
    label: string
    href: `#${SectionId}`
  }>
}

export interface ServicePillar {
  id: Extract<SectionId, 'certificaciones' | 'capacitaciones' | 'mediciones' | 'asesorias'>
  selectorLabel: string
  title: string
  description: string
  highlights: string[]
  eyebrow: string
  ctaLabel: string
  ctaHref: `#${SectionId}`
  accent: AccentTone
}

export interface ProofItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface ServiceOverviewCard {
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
  accent: AccentTone
  ctaLabel: string
  ctaHref: `#${SectionId}`
}

export interface CatalogItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface CatalogSectionData {
  id: Extract<SectionId, 'certificaciones' | 'capacitaciones' | 'mediciones' | 'asesorias'>
  eyebrow: string
  title: string
  description: string
  accent: AccentTone
  surface: 'white' | 'sand'
  items: CatalogItem[]
}

export interface ResourceCard {
  title: string
  description: string
  icon: LucideIcon
  ctaLabel: string
  ctaHref: `#${SectionId}`
}

export interface TrustTile {
  label: string
  description: string
}

export interface ContactDetail {
  label: string
  value: string
  href: string
}

export interface FooterPanel {
  title: string
  description: string
  icon: LucideIcon
  details?: string[]
  links: Array<{
    label: string
    href: `#${SectionId}`
  }>
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  {
    label: 'Servicios',
    href: '#servicios',
    children: [
      { label: 'Certificaciones', href: '#certificaciones' },
      { label: 'Capacitaciones', href: '#capacitaciones' },
      { label: 'Mediciones', href: '#mediciones' },
      { label: 'Asesorías', href: '#asesorias' },
    ],
  },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroPillars: ServicePillar[] = [
  {
    id: 'certificaciones',
    selectorLabel: 'Certificaciones',
    title: 'Certificaciones por competencias laborales',
    description:
      'Educa 24/7 presenta rutas para validar desempeño operativo, cumplimiento y criterio técnico en entornos industriales reales.',
    highlights: [
      'Programas por funciones y frente operativo',
      'Evaluación con enfoque de evidencia',
      'Lectura comercial clara para personas y empresas',
    ],
    eyebrow: 'Oferta principal',
    ctaLabel: 'Ver certificaciones',
    ctaHref: '#certificaciones',
    accent: 'red',
  },
  {
    id: 'capacitaciones',
    selectorLabel: 'Capacitaciones',
    title: 'Capacitaciones 100% prácticas en HSE',
    description:
      'La propuesta prioriza actividades críticas, control preventivo y entrenamiento aplicable a cuadrillas, supervisión y contratistas.',
    highlights: [
      'Alturas, espacios confinados y energía',
      'Brigadas, maniobras y respuesta operativa',
      'Formato de lectura directa para ventas y coordinación',
    ],
    eyebrow: 'Entrenamiento aplicado',
    ctaLabel: 'Ver capacitaciones',
    ctaHref: '#capacitaciones',
    accent: 'orange',
  },
  {
    id: 'mediciones',
    selectorLabel: 'Mediciones',
    title: 'Mediciones de factores de riesgo laboral',
    description:
      'El sitio comunica evaluación técnica de agentes ocupacionales con un lenguaje más cercano a cumplimiento, control y toma de decisiones.',
    highlights: [
      'Ruido, gases, iluminación y material particulado',
      'Lectura preventiva con criterio técnico',
      'Soporte para seguimiento documental y operativo',
    ],
    eyebrow: 'Diagnóstico y evaluación',
    ctaLabel: 'Ver mediciones',
    ctaHref: '#mediciones',
    accent: 'green',
  },
  {
    id: 'asesorias',
    selectorLabel: 'Asesorías',
    title: 'Asesorías y consultorías en seguridad y salud ocupacional',
    description:
      'La home deja visible el acompañamiento en investigación, planes, reglamentos y ejecución documental para operaciones exigentes.',
    highlights: [
      'Soporte para requisitos técnicos y legales',
      'Planes de emergencia y gestión preventiva',
      'Acompañamiento comercial listo para contacto',
    ],
    eyebrow: 'Acompañamiento especializado',
    ctaLabel: 'Ver asesorías',
    ctaHref: '#asesorias',
    accent: 'charcoal',
  },
]

export const proofItems: ProofItem[] = [
  {
    title: '4 líneas de servicio',
    description: 'Certificación, capacitación, medición y asesoría integradas en una sola propuesta.',
    icon: LayoutDashboard,
  },
  {
    title: 'Cobertura para personas y empresas',
    description: 'Comunicación útil tanto para formación individual como para coordinación corporativa.',
    icon: UsersRound,
  },
  {
    title: 'Acompañamiento documental y operativo',
    description: 'Mensajes y rutas orientados a cumplimiento, seguimiento y soporte visible en campo.',
    icon: ClipboardCheck,
  },
]

export const serviceOverviewCards: ServiceOverviewCard[] = [
  {
    title: 'Certificación',
    description:
      'Programas por competencias para validar capacidades laborales con enfoque práctico y lectura comercial más directa.',
    bullets: [
      'Prevención de riesgos laborales',
      'Asistencia de seguridad industrial',
      'Formación de formadores',
    ],
    icon: BadgeCheck,
    accent: 'red',
    ctaLabel: 'Ver certificaciones',
    ctaHref: '#certificaciones',
  },
  {
    title: 'Capacitación en HSE',
    description:
      'Entrenamientos aplicados para operaciones críticas con foco en ejecución segura, control preventivo y respuesta.',
    bullets: [
      'Trabajos en alturas',
      'Riesgos eléctricos',
      'Espacios confinados',
    ],
    icon: HardHat,
    accent: 'orange',
    ctaLabel: 'Ver capacitaciones',
    ctaHref: '#capacitaciones',
  },
  {
    title: 'Medición y Evaluación de Factores de Riesgos Laborales',
    description:
      'Servicios técnicos para identificar exposición ocupacional y convertir hallazgos en decisiones accionables.',
    bullets: ['Ruido laboral', 'Medición de gases', 'Evaluación ergonómica'],
    icon: Gauge,
    accent: 'green',
    ctaLabel: 'Ver mediciones',
    ctaHref: '#mediciones',
  },
  {
    title: 'Asesoría en Seguridad y Salud Ocupacional',
    description:
      'Acompañamiento para sistemas, reglamentos, investigación y ejecución documental con enfoque industrial.',
    bullets: [
      'Planes de emergencia',
      'Investigación de accidentes',
      'Soporte normativo',
    ],
    icon: BriefcaseBusiness,
    accent: 'charcoal',
    ctaLabel: 'Ver asesorías',
    ctaHref: '#asesorias',
  },
]

export const resourceCards: ResourceCard[] = [
  {
    title: 'Catálogo de servicios',
    description:
      'Resumen comercial para presentar la oferta técnica de Educa 24/7 con foco en certificación, capacitación y soporte.',
    icon: FileBadge2,
    ctaLabel: 'Solicitar catálogo',
    ctaHref: '#contacto',
  },
  {
    title: 'Checklist HSE',
    description:
      'Punto de partida para revisar actividades críticas y conversar sobre necesidades de entrenamiento o control.',
    icon: ClipboardCheck,
    ctaLabel: 'Explorar servicios',
    ctaHref: '#servicios',
  },
  {
    title: 'Verificación documental',
    description:
      'Bloque de apoyo para orientar conversaciones sobre evidencia, trazabilidad y soporte documental.',
    icon: ShieldCheck,
    ctaLabel: 'Ir a contacto',
    ctaHref: '#contacto',
  },
]

export const catalogSections: CatalogSectionData[] = [
  {
    id: 'certificaciones',
    eyebrow: 'Nuestras Certificaciones',
    title: 'Certificaciones por competencias laborales para frentes operativos exigentes',
    description:
      'La sección reúne los programas de certificación visibles en una parrilla clara, comercial y alineada con la oferta industrial.',
    accent: 'red',
    surface: 'white',
    items: [
      {
        title: 'Prevención de Riesgos Laborales: Construcción y Obras Públicas',
        description: 'Ruta orientada a control preventivo, supervisión y ejecución segura en obra.',
        icon: HardHat,
      },
      {
        title: 'Prevención de Riesgos Laborales: Energía Eléctrica',
        description: 'Cobertura para maniobras, intervención segura y disciplina operacional en energía.',
        icon: Sparkles,
      },
      {
        title: 'Asistencia en Seguridad Industrial',
        description: 'Programa para fortalecer inspecciones, permisos y criterios de seguridad en campo.',
        icon: ShieldCheck,
      },
      {
        title: 'Formación de Formadores',
        description: 'Diseñado para líderes internos que deben replicar estándares HSE con criterio técnico.',
        icon: BookOpenCheck,
      },
      {
        title: 'Instalación de Equipos y Máquinas Eléctricas',
        description: 'Enfoque en montaje, verificación y trabajo seguro con activos eléctricos industriales.',
        icon: Factory,
      },
      {
        title: 'Instalaciones Eléctricas',
        description: 'Buenas prácticas de ejecución, control y soporte documental para instalaciones en campo.',
        icon: Wrench,
      },
    ],
  },
  {
    id: 'capacitaciones',
    eyebrow: 'Nuestras Capacitaciones',
    title: 'Capacitaciones HSE pensadas para práctica, respuesta y prevención',
    description:
      'La grilla organiza entrenamientos visibles para cuadrillas, supervisores y personal técnico con foco en actividades críticas.',
    accent: 'orange',
    surface: 'sand',
    items: [
      {
        title: 'Prevención de Trabajos en Alturas',
        description: 'Entrenamiento sobre inspección, anclajes, ejecución y control de tareas en altura.',
        icon: RadioTower,
      },
      {
        title: 'Trabajos en Espacios Confinados',
        description: 'Cobertura para ingreso, monitoreo y coordinación segura en recintos restringidos.',
        icon: AlarmSmoke,
      },
      {
        title: 'Trabajos Peligrosos',
        description: 'Bloque general para actividades de alto riesgo que requieren disciplina operacional.',
        icon: ShieldPlus,
      },
      {
        title: 'Prevención en el Manejo de H2S',
        description: 'Preparación para detección, control preventivo y actuación frente a atmósferas peligrosas.',
        icon: Flame,
      },
      {
        title: 'Prevención de Riesgos Eléctricos',
        description: 'Buenas prácticas para intervención segura y control de energía en operación.',
        icon: Sparkles,
      },
      {
        title: 'Bloqueo y Etiquetado',
        description: 'Entrenamiento orientado a LOTO, aislamiento y verificación de energías peligrosas.',
        icon: Cog,
      },
    ],
  },
  {
    id: 'mediciones',
    eyebrow: 'Nuestras Mediciones',
    title: 'Mediciones laborales para evaluar exposición y priorizar acciones correctivas',
    description:
      'El bloque mantiene visible la oferta de evaluación técnica con un formato más claro para clientes y coordinación interna.',
    accent: 'green',
    surface: 'white',
    items: [
      {
        title: 'Medición de Material Particulado',
        description: 'Evaluación de presencia de partículas en ambientes de trabajo y frentes de operación.',
        icon: ScanSearch,
      },
      {
        title: 'Medición de Niveles de Ruido Laboral',
        description: 'Lectura técnica para revisar exposición a ruido y definir controles en puestos críticos.',
        icon: Siren,
      },
      {
        title: 'Medición de Gases',
        description: 'Cobertura para detección de atmósferas peligrosas y condiciones de ingreso seguro.',
        icon: AlarmSmoke,
      },
      {
        title: 'Medición de Iluminación',
        description: 'Revisión de niveles lumínicos para seguridad, productividad y cumplimiento ocupacional.',
        icon: Lightbulb,
      },
      {
        title: 'Evaluación de Riesgos Ergonómicos',
        description: 'Análisis de tareas, posturas y exigencia física en actividades operativas.',
        icon: UsersRound,
      },
      {
        title: 'Evaluación de Riesgos Psicosociales',
        description: 'Diagnóstico de condiciones que afectan desempeño, bienestar y sostenibilidad del equipo.',
        icon: Building2,
      },
    ],
  },
  {
    id: 'asesorias',
    eyebrow: 'Nuestras Asesorías',
    title: 'Asesorías para sostener sistemas, investigación y soporte documental',
    description:
      'La home cierra la oferta técnica con acompañamiento especializado para investigación, reglamentos y ejecución preventiva.',
    accent: 'charcoal',
    surface: 'sand',
    items: [
      {
        title: 'Asesoría en Investigación de Accidentes Laborales y Enfermedades Ocupacionales',
        description: 'Soporte para análisis, documentación y planes de acción posteriores al evento.',
        icon: ShieldCheck,
      },
      {
        title: 'Elaboración de Planes de Emergencia y Contingencia',
        description: 'Construcción de rutas de respuesta con enfoque operativo y documentación lista para revisión.',
        icon: Siren,
      },
      {
        title: 'Levantamiento y Ejecución del Plan Anual de Capacitación de Seguridad y Salud Ocupacional',
        description: 'Acompañamiento para ordenar la programación anual y su despliegue por perfiles.',
        icon: ClipboardCheck,
      },
      {
        title: 'Elaboración del Reglamento de Higiene y Seguridad con registro en el Ministerio del Trabajo',
        description: 'Soporte técnico para reglamentos, estructura documental y preparación para registro.',
        icon: FileBadge2,
      },
    ],
  },
]

export const trustTiles: TrustTile[] = [
  {
    label: 'Construcción',
    description: 'Obras, montaje y coordinación preventiva en campo.',
  },
  {
    label: 'Energía',
    description: 'Actividades con criticidad técnica y control operacional.',
  },
  {
    label: 'Manufactura',
    description: 'Procesos productivos con foco en continuidad y seguridad.',
  },
  {
    label: 'Hidrocarburos',
    description: 'Escenarios que exigen disciplina, permisos y respuesta.',
  },
  {
    label: 'Logística',
    description: 'Operaciones con movimiento de carga, tránsito y coordinación.',
  },
  {
    label: 'Mantenimiento',
    description: 'Intervenciones técnicas sobre activos y sistemas críticos.',
  },
]

export const contactDetails: ContactDetail[] = [
  {
    label: 'Correo comercial',
    value: 'hola@educa247.ec',
    href: 'mailto:hola@educa247.ec',
  },
  {
    label: 'WhatsApp',
    value: '+593 99 000 0000',
    href: 'https://wa.me/593990000000',
  },
  {
    label: 'Cobertura',
    value: 'Guayaquil, Ecuador',
    href: '#contacto',
  },
]

export const footerPanels: FooterPanel[] = [
  {
    title: 'Descargar catálogo',
    description: 'Solicita el material comercial y revisa la oferta completa desde la misma landing.',
    icon: FileBadge2,
    links: [
      { label: 'Solicitar catálogo', href: '#contacto' },
      { label: 'Explorar servicios', href: '#servicios' },
    ],
  },
  {
    title: 'Verificación de certificados',
    description: 'Usa accesos internos para dirigir la conversación hacia las líneas certificables.',
    icon: BadgeCheck,
    links: [
      { label: 'Capacitación', href: '#capacitaciones' },
      { label: 'Certificación', href: '#certificaciones' },
    ],
  },
  {
    title: 'Contáctanos',
    description: 'Canales actuales de Educa 24/7 para seguimiento comercial y coordinación inicial.',
    icon: UsersRound,
    details: contactDetails.map((item) => `${item.label}: ${item.value}`),
    links: [{ label: 'Ir al inicio', href: '#inicio' }],
  },
  {
    title: 'Áreas de interés',
    description: 'Secciones clave para recorrer la propuesta por tipo de servicio.',
    icon: Building2,
    links: [
      { label: 'Certificaciones', href: '#certificaciones' },
      { label: 'Capacitaciones', href: '#capacitaciones' },
      { label: 'Mediciones', href: '#mediciones' },
      { label: 'Asesorías', href: '#asesorias' },
    ],
  },
]

export interface HeroFeature {
  label: string
  icon: LucideIcon
}

export interface ServiceCard {
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
  accent: AccentTone
}

export interface StatItem {
  value: string
  label: string
  detail: string
  icon: LucideIcon
  accent: AccentTone
}

export interface ProgramCard {
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
  tag: string | null
}

export interface EnterpriseBenefit {
  title: string
  description: string
  icon: LucideIcon
}

export interface SectorBadge {
  label: string
  icon: LucideIcon
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FooterGroup {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

export interface TrustItem {
  icon: LucideIcon
  title: string
}

export interface AudiencePath {
  audience: AudienceType
  title: string
  description: string
  features: string[]
  ctaLabel: string
  ctaHref: `#${SectionId}`
  icon: LucideIcon
}

export interface CourseCategory {
  title: string
  description: string
  icon: LucideIcon
  tag: CategoryTag
}

export interface PlatformBenefit {
  title: string
  description: string
  icon: LucideIcon
}

export interface WorkflowStep {
  title: string
  description: string
}

export interface LeadershipProfile {
  name: string
  role: string
  bio: string
  areas: string[]
  badge: string
  label: string
  initials: string
  featured: boolean
}

export interface EnterpriseMetric {
  label: string
  value: string
  tone: 'navy' | 'amber' | 'success'
}

export interface TestimonialPlaceholder {
  quote: string
  name: string
  role: string
  company: string
}

export interface HeroAudienceView {
  audience: AudienceType
  selectorLabel: string
  description: string
  highlights: string[]
  secondaryCta: {
    label: string
    href: `#${SectionId}`
  }
  dashboard: {
    completion: number
    learners: string
    compliance: string
    nextModule: string
    activeCourse: string
    activeProgress: string
    certification: string
    pending: string
  }
}

export const heroFeatures: HeroFeature[] = []
export const serviceCards: ServiceCard[] = []
export const statItems: StatItem[] = []
export const programCards: ProgramCard[] = []
export const enterpriseBenefits: EnterpriseBenefit[] = []
export const sectorBadges: SectorBadge[] = []
export const faqs: FAQItem[] = []
export const footerGroups: FooterGroup[] = []
export const heroAudienceViews: HeroAudienceView[] = []
export const trustItems: TrustItem[] = []
export const audiencePaths: AudiencePath[] = []
export const courseCategories: CourseCategory[] = []
export const platformBenefits: PlatformBenefit[] = []
export const workflowSteps: WorkflowStep[] = []
export const leadershipProfiles: LeadershipProfile[] = []
export const enterpriseFeatures: string[] = []
export const enterpriseMetrics: EnterpriseMetric[] = []
export const testimonialsPlaceholders: TestimonialPlaceholder[] = []
