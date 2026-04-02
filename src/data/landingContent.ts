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
  'Asesorías técnicas',
]

export const heroFeatures: HeroFeature[] = [
  { label: 'Rutas modulares por operación y perfil', icon: BookOpenCheck },
  { label: 'Evaluación, evidencia y certificación digital', icon: FileBadge2 },
  { label: 'Cobertura para personas, cuadrillas y empresas', icon: UsersRound },
]

export const serviceCards: ServiceCard[] = [
  {
    title: 'Certificaciones',
    description:
      'Programas por competencias para validar habilidades operativas, cumplimiento y desempeño en contextos industriales reales.',
    bullets: [
      'Prevención de riesgos laborales',
      'Asistencia en seguridad industrial',
      'Formación de formadores',
    ],
    icon: BadgeCheck,
    accent: 'red',
  },
  {
    title: 'Capacitaciones HSE',
    description:
      'Experiencias prácticas para equipos técnicos y operativos en trabajos críticos, respuesta y control preventivo.',
    bullets: [
      'Trabajos en alturas',
      'Espacios confinados',
      'Riesgo eléctrico y brigadas',
    ],
    icon: HardHat,
    accent: 'orange',
  },
  {
    title: 'Mediciones',
    description:
      'Evaluación de factores de riesgo laboral con enfoque técnico, trazable y orientado a decisiones correctivas.',
    bullets: [
      'Ruido, gases e iluminación',
      'Material particulado y estrés térmico',
      'Ergonomía y exposición ocupacional',
    ],
    icon: Gauge,
    accent: 'green',
  },
  {
    title: 'Asesorías',
    description:
      'Acompañamiento para fortalecer sistemas, requisitos legales y cultura preventiva en operaciones de alto impacto.',
    bullets: [
      'Planes de emergencia y contingencia',
      'Investigación de incidentes',
      'Reglamentos y soporte documental',
    ],
    icon: BriefcaseBusiness,
    accent: 'charcoal',
  },
]

export const statItems: StatItem[] = [
  {
    value: '4 líneas',
    label: 'de servicio conectadas',
    detail: 'Una sola propuesta comercial para certificar, capacitar, medir y asesorar.',
    icon: Factory,
    accent: 'red',
  },
  {
    value: '360°',
    label: 'de seguimiento visible',
    detail: 'Desde el diagnóstico inicial hasta la evidencia final de cumplimiento.',
    icon: ChartColumnIncreasing,
    accent: 'orange',
  },
  {
    value: '1 panel',
    label: 'para coordinación corporativa',
    detail: 'Avance por cargo, alertas de renovación y trazabilidad por colaborador.',
    icon: LayoutDashboard,
    accent: 'green',
  },
  {
    value: 'HSE',
    label: 'con enfoque aplicado',
    detail: 'Diseño formativo pensado para industria, supervisores y equipos operativos.',
    icon: ShieldCheck,
    accent: 'charcoal',
  },
]

export const programCards: ProgramCard[] = [
  {
    title: 'Seguridad industrial',
    description:
      'Control preventivo, procedimientos y criterios de seguridad para operaciones, mantenimiento y supervisión.',
    bullets: ['Análisis de tareas', 'Permisos de trabajo'],
    icon: ShieldPlus,
    tag: 'Alta demanda',
  },
  {
    title: 'Trabajos en alturas',
    description:
      'Planeación, inspección y ejecución segura de labores sobre estructuras, cubiertas y puntos elevados.',
    bullets: ['Uso de líneas de vida', 'Rescate básico'],
    icon: RadioTower,
    tag: 'Crítico',
  },
  {
    title: 'Riesgo eléctrico',
    description:
      'Buenas prácticas para intervenciones, bloqueo, etiquetado y control de energía en campo.',
    bullets: ['LOTO', 'Procedimientos seguros'],
    icon: Sparkles,
    tag: null,
  },
  {
    title: 'Espacios confinados',
    description:
      'Ingreso, monitoreo atmosférico y respuesta en actividades donde el error operativo no es una opción.',
    bullets: ['Permisos de ingreso', 'Monitoreo continuo'],
    icon: AlarmSmoke,
    tag: 'Supervisión',
  },
  {
    title: 'Brigadas y emergencias',
    description:
      'Formación para actuar, contener y coordinar incidentes con tiempos de respuesta más claros.',
    bullets: ['Primer respondiente', 'Simulacros'],
    icon: Siren,
    tag: null,
  },
  {
    title: 'Higiene y mediciones',
    description:
      'Identificación y evaluación de agentes físicos, químicos y ergonómicos en puestos reales.',
    bullets: ['Ruido y vibración', 'Iluminación y gases'],
    icon: ScanSearch,
    tag: 'Técnico',
  },
  {
    title: 'Mantenimiento seguro',
    description:
      'Rutinas seguras para equipos, herramientas, motores y componentes críticos en planta.',
    bullets: ['Trabajo mecánico', 'Inspección de activos'],
    icon: Wrench,
    tag: null,
  },
  {
    title: 'Cultura preventiva',
    description:
      'Hábitos, liderazgo visible y comunicación para sostener conductas seguras en el tiempo.',
    bullets: ['Liderazgo operativo', 'Observación preventiva'],
    icon: Lightbulb,
    tag: 'Continuidad',
  },
]

export const enterpriseBenefits: EnterpriseBenefit[] = [
  {
    title: 'Asignación por área, cargo o contratista',
    description: 'Construye rutas formativas según funciones reales y exigencias del frente operativo.',
    icon: Building2,
  },
  {
    title: 'Seguimiento por colaborador',
    description: 'Visualiza cumplimiento, pendientes y renovaciones sin depender de hojas dispersas.',
    icon: ClipboardCheck,
  },
  {
    title: 'Evidencia lista para auditoría',
    description: 'Conserva historial, certificaciones y estados de avance para soporte documental.',
    icon: FileBadge2,
  },
  {
    title: 'Lectura ejecutiva para coordinación',
    description: 'Transforma información técnica en tableros claros para supervisión y decisión.',
    icon: ChartColumnIncreasing,
  },
]

export const sectorBadges: SectorBadge[] = [
  { label: 'Manufactura', icon: Factory },
  { label: 'Construcción', icon: HardHat },
  { label: 'Energía', icon: Flame },
  { label: 'Logística', icon: Building2 },
  { label: 'Mantenimiento', icon: Cog },
  { label: 'Operaciones críticas', icon: ShieldCheck },
]

export const faqs: FAQItem[] = [
  {
    question: '¿Educa 24/7 está pensado solo para cursos en línea?',
    answer:
      'No. La propuesta se presenta como una plataforma y una capa comercial para certificación, capacitación, medición y acompañamiento técnico con enfoque industrial.',
  },
  {
    question: '¿Se puede usar con equipos y empresas?',
    answer:
      'Sí. La landing se enfoca en mostrar rutas para organizaciones, seguimiento por colaborador, evidencia y lectura ejecutiva para coordinadores.',
  },
  {
    question: '¿Qué tipo de programas pueden destacarse en la home?',
    answer:
      'Programas de seguridad industrial, trabajos en alturas, espacios confinados, riesgo eléctrico, brigadas, higiene industrial y otras rutas alineadas al contexto del cliente.',
  },
  {
    question: '¿La página puede comunicar servicios técnicos además de capacitación?',
    answer:
      'Sí. El nuevo layout deja visibles las cuatro líneas comerciales: certificaciones, capacitaciones, mediciones y asesorías.',
  },
  {
    question: '¿Habrá espacio para activos reales del cliente?',
    answer:
      'Sí. La estructura deja áreas fáciles de reemplazar con logos, fotos de campo, cifras reales y testimonios cuando el cliente los entregue.',
  },
]

export const footerGroups: FooterGroup[] = [
  {
    title: 'Navegación',
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
      { label: 'Gestión por equipos', href: '#empresas' },
      { label: 'Sectores', href: '#sectores' },
      { label: 'Contacto', href: '#contacto' },
    ],
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
