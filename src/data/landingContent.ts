import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ChartColumnIncreasing,
  ClipboardCheck,
  FileBadge2,
  GraduationCap,
  HardHat,
  HeartPulse,
  LayoutDashboard,
  Lightbulb,
  ShieldCheck,
  ShieldPlus,
  Siren,
  Sparkles,
  UsersRound,
} from 'lucide-react'

export type SectionId =
  | 'inicio'
  | 'cursos'
  | 'empresas'
  | 'metodologia'
  | 'equipo'
  | 'contacto'

export type AudienceType = 'profesionales' | 'empresas'
export type CategoryTag = 'nuevo' | 'mas-demandado' | null

export interface NavLink {
  label: string
  href: `#${SectionId}`
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

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Para Empresas', href: '#empresas' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroAudienceViews: HeroAudienceView[] = [
  {
    audience: 'profesionales',
    selectorLabel: 'Profesionales',
    description:
      'Capacitacion profesional para avanzar por modulos, demostrar competencias y obtener certificacion digital con una experiencia clara y verificable.',
    highlights: [
      'Ruta flexible por modulos',
      'Evaluaciones aplicadas por bloque',
      'Progreso visible en todo momento',
      'Certificados digitales descargables',
    ],
    secondaryCta: {
      label: 'Explorar programas',
      href: '#cursos',
    },
    dashboard: {
      completion: 82,
      learners: '148 alumnos activos',
      compliance: '94% avance registrado',
      nextModule: 'Investigacion de incidentes',
      activeCourse: 'Manejo de riesgos industriales',
      activeProgress: '82% completado',
      certification: 'Certificado listo para emision',
      pending: '3 evaluaciones pendientes',
    },
  },
  {
    audience: 'empresas',
    selectorLabel: 'Empresas',
    description:
      'Gestiona rutas formativas por cargo, supervisa cumplimiento y centraliza evidencia de capacitacion para equipos y organizaciones desde un mismo panel.',
    highlights: [
      'Panel para coordinadores',
      'Cumplimiento por area y colaborador',
      'Asignacion por grupos o cargos',
      'Alertas de renovacion y certificacion',
    ],
    secondaryCta: {
      label: 'Ver solucion empresarial',
      href: '#empresas',
    },
    dashboard: {
      completion: 91,
      learners: '12 equipos asignados',
      compliance: '91% cumplimiento global',
      nextModule: 'Brigadas y respuesta ante emergencias',
      activeCourse: 'Ruta corporativa de cumplimiento',
      activeProgress: '91% del plan anual ejecutado',
      certification: '27 certificados emitidos este mes',
      pending: '5 renovaciones por programar',
    },
  },
]

export const trustItems: TrustItem[] = [
  { icon: ShieldCheck, title: 'Enfoque en seguridad y cumplimiento' },
  { icon: BookOpenCheck, title: 'Diseno instruccional aplicado' },
  { icon: ClipboardCheck, title: 'Evaluacion y trazabilidad' },
  { icon: UsersRound, title: 'Formacion para personas y empresas' },
  { icon: FileBadge2, title: 'Certificacion digital' },
]

export const audiencePaths: AudiencePath[] = [
  {
    audience: 'profesionales',
    title: 'Para profesionales',
    description:
      'Accede a programas especializados, completa modulos a tu ritmo y obten constancias y certificados digitales.',
    features: [
      'Acceso por modulos',
      'Progreso visible',
      'Evaluaciones',
      'Descarga de certificado',
      'Aprendizaje flexible',
    ],
    ctaLabel: 'Ver programas',
    ctaHref: '#cursos',
    icon: GraduationCap,
  },
  {
    audience: 'empresas',
    title: 'Para empresas',
    description:
      'Administra grupos, asigna rutas formativas, supervisa cumplimiento y da seguimiento al avance de tus colaboradores.',
    features: [
      'Panel de equipos',
      'Seguimiento por colaborador',
      'Reportes',
      'Rutas por rol',
      'Control de cumplimiento',
    ],
    ctaLabel: 'Solicitar demo',
    ctaHref: '#contacto',
    icon: Building2,
  },
]

export const courseCategories: CourseCategory[] = [
  {
    title: 'Seguridad Industrial',
    description: 'Controles preventivos, procedimientos y practicas seguras para entornos operativos.',
    icon: HardHat,
    tag: 'mas-demandado',
  },
  {
    title: 'Salud Ocupacional',
    description: 'Bienestar laboral, vigilancia de la salud y prevencion de factores de riesgo.',
    icon: HeartPulse,
    tag: null,
  },
  {
    title: 'Higiene Industrial',
    description: 'Identificacion, evaluacion y control de agentes fisicos, quimicos y biologicos.',
    icon: ShieldPlus,
    tag: null,
  },
  {
    title: 'Gestion de Riesgos',
    description: 'Matrices, priorizacion y seguimiento de riesgos en operaciones y proyectos.',
    icon: ChartColumnIncreasing,
    tag: 'nuevo',
  },
  {
    title: 'Prevencion y Emergencias',
    description: 'Protocolos de respuesta, brigadas y preparacion ante incidentes criticos.',
    icon: Siren,
    tag: null,
  },
  {
    title: 'Normativas y Cumplimiento',
    description: 'Requisitos, auditorias y evidencia de cumplimiento para gestion documental.',
    icon: BadgeCheck,
    tag: null,
  },
  {
    title: 'Formacion de Supervisores',
    description: 'Herramientas para lideres de equipo con foco en cultura preventiva y seguimiento.',
    icon: BriefcaseBusiness,
    tag: null,
  },
  {
    title: 'Cultura de Seguridad',
    description: 'Habitos, comunicacion y liderazgo para sostener practicas seguras en el tiempo.',
    icon: Lightbulb,
    tag: null,
  },
]

export const platformBenefits: PlatformBenefit[] = [
  {
    title: 'Seguimiento del progreso',
    description: 'Visualiza avance individual y grupal con indicadores faciles de revisar.',
    icon: ChartColumnIncreasing,
  },
  {
    title: 'Evaluaciones por modulo',
    description: 'Mide dominio y cumplimiento con instancias de verificacion por bloque.',
    icon: ClipboardCheck,
  },
  {
    title: 'Certificados digitales',
    description: 'Emite constancias verificables para participantes y coordinadores.',
    icon: FileBadge2,
  },
  {
    title: 'Rutas formativas por perfil',
    description: 'Organiza contenidos segun rol, responsabilidad o area operativa.',
    icon: ArrowRight,
  },
  {
    title: 'Panel para coordinadores',
    description: 'Centraliza equipos, alertas, pendientes y visibilidad de cumplimiento.',
    icon: LayoutDashboard,
  },
  {
    title: 'Contenido por competencias',
    description: 'Estructura el aprendizaje con una logica aplicada y secuencial.',
    icon: Sparkles,
  },
]

export const workflowSteps: WorkflowStep[] = [
  {
    title: 'Explora el programa',
    description: 'Revisa areas, objetivos y rutas disponibles segun tu necesidad.',
  },
  {
    title: 'Inscribete o asigna equipos',
    description: 'Activa a personas o grupos desde una experiencia simple y guiada.',
  },
  {
    title: 'Completa modulos y evaluaciones',
    description: 'Avanza por contenidos estructurados con evidencias de aprendizaje.',
  },
  {
    title: 'Obten seguimiento y certificacion',
    description: 'Consulta resultados, cumplimiento y certificados digitales emitidos.',
  },
]

export const leadershipProfiles: LeadershipProfile[] = [
  {
    name: 'Maria Ortega',
    role: 'Directora Academica y Lider General del Proyecto',
    bio: 'Especialista en seguridad, salud e higiene industrial con maestria en el area, certificacion en implementacion ISO 45001, formacion en metodologias digitales y experiencia en capacitacion aplicada y planificacion curricular.',
    areas: [
      'Seguridad y salud industrial',
      'Diseno curricular',
      'ISO 45001',
      'Formacion de formadores',
      'Capacitacion aplicada',
    ],
    badge: 'Direccion academica',
    label: 'Liderazgo academico',
    initials: 'MO',
    featured: true,
  },
  {
    name: 'Kevin Fajardo',
    role: 'Director de Desarrollo Profesional',
    bio: 'Profesional del ambito educativo con experiencia en coordinacion academica, liderazgo institucional y fortalecimiento de trayectorias formativas. Integra enfoque de desarrollo profesional, innovacion pedagogica y gestion estrategica.',
    areas: [
      'Liderazgo academico',
      'Desarrollo profesional',
      'Innovacion pedagogica',
      'IA aplicada a educacion',
      'Gestion estrategica',
    ],
    badge: 'Desarrollo profesional',
    label: 'Proyeccion formativa',
    initials: 'KF',
    featured: false,
  },
]

export const enterpriseFeatures: string[] = [
  'Asignacion por grupos o areas',
  'Seguimiento por colaborador',
  'Reportes descargables',
  'Evidencia de cumplimiento',
  'Escalabilidad para multiples equipos',
]

export const enterpriseMetrics: EnterpriseMetric[] = [
  { label: 'Colaboradores activos', value: '--', tone: 'navy' },
  { label: 'Avance por equipo', value: '--', tone: 'success' },
  { label: 'Modulos asignados', value: '--', tone: 'amber' },
  { label: 'Alertas de renovacion', value: '--', tone: 'navy' },
]

export const testimonialsPlaceholders: TestimonialPlaceholder[] = [
  {
    quote:
      'Espacio listo para incorporar testimonios validados de clientes, instituciones o sectores industriales.',
    name: 'Disponible proximamente',
    role: 'Testimonio en validacion',
    company: 'Empresa o institucion',
  },
  {
    quote:
      'La seccion esta preparada para mostrar casos de uso, credenciales y pruebas de implementacion reales.',
    name: 'Disponible proximamente',
    role: 'Caso de uso',
    company: 'Sector productivo',
  },
  {
    quote:
      'Disenada para activarse con citas breves, cargo, empresa y resultados concretos cuando existan aprobaciones.',
    name: 'Disponible proximamente',
    role: 'Referencia institucional',
    company: 'Aliado corporativo',
  },
]

export const faqs: FAQItem[] = [
  {
    question: 'La capacitacion es 100% en linea?',
    answer:
      'Si. La experiencia esta pensada para gestionarse desde la plataforma con acceso por modulos, seguimiento y certificacion digital.',
  },
  {
    question: 'Se entrega certificado?',
    answer:
      'Si. Los programas contemplan certificados o constancias digitales segun la ruta completada y la evaluacion correspondiente.',
  },
  {
    question: 'La plataforma sirve para empresas?',
    answer:
      'Si. CASST considera coordinacion por equipos, seguimiento por colaborador y evidencia de cumplimiento para organizaciones.',
  },
  {
    question: 'Se puede dar seguimiento al avance?',
    answer:
      'Si. La plataforma contempla paneles de progreso, estado por modulo y visibilidad de pendientes para personas y equipos.',
  },
  {
    question: 'Los programas estan organizados por modulos?',
    answer:
      'Si. El contenido se estructura por modulos y competencias para facilitar aprendizaje, evaluacion y trazabilidad.',
  },
  {
    question: 'Se pueden crear rutas para distintos perfiles?',
    answer:
      'Si. La logica del sitio considera rutas diferenciadas por cargo, funcion o necesidad operativa.',
  },
]

export const footerGroups: FooterGroup[] = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Metodologia', href: '#metodologia' },
      { label: 'FAQ', href: '#contacto' },
    ],
  },
  {
    title: 'Programas',
    links: [
      { label: 'Seguridad industrial', href: '#cursos' },
      { label: 'Gestion de riesgos', href: '#cursos' },
      { label: 'Cultura de seguridad', href: '#cursos' },
    ],
  },
  {
    title: 'Para empresas',
    links: [
      { label: 'Solucion corporativa', href: '#empresas' },
      { label: 'Seguimiento', href: '#empresas' },
      { label: 'Solicitar demo', href: '#contacto' },
    ],
  },
  {
    title: 'Equipo',
    links: [
      { label: 'Direccion academica', href: '#equipo' },
      { label: 'Desarrollo profesional', href: '#equipo' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
]

export const contactDetails: ContactDetail[] = [
  {
    label: 'Email placeholder',
    value: 'contacto@casst.placeholder',
    href: 'mailto:contacto@casst.placeholder',
  },
  {
    label: 'WhatsApp placeholder',
    value: '+593 000 000 000',
    href: 'https://wa.me/593000000000',
  },
  {
    label: 'Ciudad / pais',
    value: 'Guayaquil, Ecuador',
    href: '#contacto',
  },
]
