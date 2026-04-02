import type { LucideIcon } from 'lucide-react'
import {
  AlarmSmoke,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ChartColumnIncreasing,
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
  | 'programas'
  | 'empresas'
  | 'sectores'
  | 'contacto'
  | 'cursos'
  | 'metodologia'
  | 'equipo'

export type AudienceType = 'profesionales' | 'empresas'
export type CategoryTag = 'nuevo' | 'mas-demandado' | null

export interface NavLink {
  label: string
  href: `#${SectionId}`
}

export interface HeroFeature {
  label: string
  icon: LucideIcon
}

export interface ServiceCard {
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
  accent: 'red' | 'orange' | 'green' | 'charcoal'
}

export interface StatItem {
  value: string
  label: string
  detail: string
  icon: LucideIcon
  accent: 'red' | 'orange' | 'green' | 'charcoal'
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

export interface ContactDetail {
  label: string
  value: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Programas', href: '#programas' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroServiceChips = [
  'Certificaciones por competencias',
  'Capacitaciones HSE',
  'Mediciones ocupacionales',
  'Asesorias tecnicas',
]

export const heroFeatures: HeroFeature[] = [
  { label: 'Rutas modulares por operacion y perfil', icon: BookOpenCheck },
  { label: 'Evaluacion, evidencia y certificacion digital', icon: FileBadge2 },
  { label: 'Cobertura para personas, cuadrillas y empresas', icon: UsersRound },
]

export const serviceCards: ServiceCard[] = [
  {
    title: 'Certificaciones',
    description:
      'Programas por competencias para validar habilidades operativas, cumplimiento y desempeno en contextos industriales reales.',
    bullets: [
      'Prevencion de riesgos laborales',
      'Asistencia en seguridad industrial',
      'Formacion de formadores',
    ],
    icon: BadgeCheck,
    accent: 'red',
  },
  {
    title: 'Capacitaciones HSE',
    description:
      'Experiencias practicas para equipos tecnicos y operativos en trabajos criticos, respuesta y control preventivo.',
    bullets: [
      'Trabajos en alturas',
      'Espacios confinados',
      'Riesgo electrico y brigadas',
    ],
    icon: HardHat,
    accent: 'orange',
  },
  {
    title: 'Mediciones',
    description:
      'Evaluacion de factores de riesgo laboral con enfoque tecnico, trazable y orientado a decisiones correctivas.',
    bullets: [
      'Ruido, gases e iluminacion',
      'Material particulado y estres termico',
      'Ergonomia y exposicion ocupacional',
    ],
    icon: Gauge,
    accent: 'green',
  },
  {
    title: 'Asesorias',
    description:
      'Acompanamiento para fortalecer sistemas, requisitos legales y cultura preventiva en operaciones de alto impacto.',
    bullets: [
      'Planes de emergencia y contingencia',
      'Investigacion de incidentes',
      'Reglamentos y soporte documental',
    ],
    icon: BriefcaseBusiness,
    accent: 'charcoal',
  },
]

export const statItems: StatItem[] = [
  {
    value: '4 lineas',
    label: 'de servicio conectadas',
    detail: 'Una sola propuesta comercial para certificar, capacitar, medir y asesorar.',
    icon: Factory,
    accent: 'red',
  },
  {
    value: '360deg',
    label: 'de seguimiento visible',
    detail: 'Desde el diagnostico inicial hasta la evidencia final de cumplimiento.',
    icon: ChartColumnIncreasing,
    accent: 'orange',
  },
  {
    value: '1 panel',
    label: 'para coordinacion corporativa',
    detail: 'Avance por cargo, alertas de renovacion y trazabilidad por colaborador.',
    icon: LayoutDashboard,
    accent: 'green',
  },
  {
    value: 'HSE',
    label: 'con enfoque aplicado',
    detail: 'Diseno formativo pensado para industria, supervisores y equipos operativos.',
    icon: ShieldCheck,
    accent: 'charcoal',
  },
]

export const programCards: ProgramCard[] = [
  {
    title: 'Seguridad industrial',
    description:
      'Control preventivo, procedimientos y criterios de seguridad para operaciones, mantenimiento y supervision.',
    bullets: ['Analisis de tareas', 'Permisos de trabajo'],
    icon: ShieldPlus,
    tag: 'Alta demanda',
  },
  {
    title: 'Trabajos en alturas',
    description:
      'Planeacion, inspeccion y ejecucion segura de labores sobre estructuras, cubiertas y puntos elevados.',
    bullets: ['Uso de lineas de vida', 'Rescate basico'],
    icon: RadioTower,
    tag: 'Critico',
  },
  {
    title: 'Riesgo electrico',
    description:
      'Buenas practicas para intervenciones, bloqueo, etiquetado y control de energia en campo.',
    bullets: ['LOTO', 'Procedimientos seguros'],
    icon: Sparkles,
    tag: null,
  },
  {
    title: 'Espacios confinados',
    description:
      'Ingreso, monitoreo atmosferico y respuesta en actividades donde el error operativo no es una opcion.',
    bullets: ['Permisos de ingreso', 'Monitoreo continuo'],
    icon: AlarmSmoke,
    tag: 'Supervision',
  },
  {
    title: 'Brigadas y emergencias',
    description:
      'Formacion para actuar, contener y coordinar incidentes con tiempos de respuesta mas claros.',
    bullets: ['Primer respondiente', 'Simulacros'],
    icon: Siren,
    tag: null,
  },
  {
    title: 'Higiene y mediciones',
    description:
      'Identificacion y evaluacion de agentes fisicos, quimicos y ergonomicos en puestos reales.',
    bullets: ['Ruido y vibracion', 'Iluminacion y gases'],
    icon: ScanSearch,
    tag: 'Tecnico',
  },
  {
    title: 'Mantenimiento seguro',
    description:
      'Rutinas seguras para equipos, herramientas, motores y componentes criticos en planta.',
    bullets: ['Trabajo mecanico', 'Inspeccion de activos'],
    icon: Wrench,
    tag: null,
  },
  {
    title: 'Cultura preventiva',
    description:
      'Habitos, liderazgo visible y comunicacion para sostener conductas seguras en el tiempo.',
    bullets: ['Liderazgo operativo', 'Observacion preventiva'],
    icon: Lightbulb,
    tag: 'Continuidad',
  },
]

export const enterpriseBenefits: EnterpriseBenefit[] = [
  {
    title: 'Asignacion por area, cargo o contratista',
    description: 'Construye rutas formativas segun funciones reales y exigencias del frente operativo.',
    icon: Building2,
  },
  {
    title: 'Seguimiento por colaborador',
    description: 'Visualiza cumplimiento, pendientes y renovaciones sin depender de hojas dispersas.',
    icon: ClipboardCheck,
  },
  {
    title: 'Evidencia lista para auditoria',
    description: 'Conserva historial, certificaciones y estados de avance para soporte documental.',
    icon: FileBadge2,
  },
  {
    title: 'Lectura ejecutiva para coordinacion',
    description: 'Transforma informacion tecnica en tableros claros para supervision y decision.',
    icon: ChartColumnIncreasing,
  },
]

export const sectorBadges: SectorBadge[] = [
  { label: 'Manufactura', icon: Factory },
  { label: 'Construccion', icon: HardHat },
  { label: 'Energia', icon: Flame },
  { label: 'Logistica', icon: Building2 },
  { label: 'Mantenimiento', icon: Cog },
  { label: 'Operaciones criticas', icon: ShieldCheck },
]

export const faqs: FAQItem[] = [
  {
    question: 'CASST esta pensado solo para cursos en linea?',
    answer:
      'No. La propuesta se presenta como una plataforma y una capa comercial para certificacion, capacitacion, medicion y acompanamiento tecnico con enfoque industrial.',
  },
  {
    question: 'Se puede usar con equipos y empresas?',
    answer:
      'Si. La landing se enfoca en mostrar rutas para organizaciones, seguimiento por colaborador, evidencia y lectura ejecutiva para coordinadores.',
  },
  {
    question: 'Que tipo de programas pueden destacarse en la home?',
    answer:
      'Programas de seguridad industrial, trabajos en alturas, espacios confinados, riesgo electrico, brigadas, higiene industrial y otras rutas alineadas al contexto del cliente.',
  },
  {
    question: 'La pagina puede comunicar servicios tecnicos ademas de capacitacion?',
    answer:
      'Si. El nuevo layout deja visibles las cuatro lineas comerciales: certificaciones, capacitaciones, mediciones y asesorias.',
  },
  {
    question: 'Habra espacio para activos reales del cliente?',
    answer:
      'Si. La estructura deja areas faciles de reemplazar con logos, fotos de campo, cifras reales y testimonios cuando el cliente los entregue.',
  },
]

export const footerGroups: FooterGroup[] = [
  {
    title: 'Navegacion',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Programas', href: '#programas' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Certificaciones', href: '#servicios' },
      { label: 'Capacitaciones HSE', href: '#servicios' },
      { label: 'Mediciones', href: '#servicios' },
    ],
  },
  {
    title: 'Empresas',
    links: [
      { label: 'Gestion por equipos', href: '#empresas' },
      { label: 'Sectores', href: '#sectores' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
]

export const contactDetails: ContactDetail[] = [
  {
    label: 'Correo comercial',
    value: 'hola@casst.ec',
    href: 'mailto:hola@casst.ec',
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
