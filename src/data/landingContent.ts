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
import asistenciaSeguridadIndustrialImage from '../assets/catalog/certificaciones/asistencia-seguridad-industrial.webp'
import formacionFormadoresImage from '../assets/catalog/certificaciones/formacion-formadores.webp'
import instalacionEquiposMaquinasElectricasImage from '../assets/catalog/certificaciones/instalacion-equipos-maquinas-electricas.webp'
import instalacionesElectricasImage from '../assets/catalog/certificaciones/instalaciones-electricas.webp'
import prevencionRiesgosConstruccionImage from '../assets/catalog/certificaciones/prevencion-riesgos-construccion.webp'
import prevencionRiesgosEnergiaElectricaImage from '../assets/catalog/certificaciones/prevencion-riesgos-energia-electrica.webp'
import bloqueoEtiquetadoImage from '../assets/catalog/capacitaciones/bloqueo-etiquetado.webp'
import espaciosConfinadosImage from '../assets/catalog/capacitaciones/espacios-confinados.webp'
import manejoH2SImage from '../assets/catalog/capacitaciones/manejo-h2s.webp'
import riesgosElectricosImage from '../assets/catalog/capacitaciones/riesgos-electricos.webp'
import trabajosAlturasImage from '../assets/catalog/capacitaciones/trabajos-alturas.webp'
import trabajosPeligrososImage from '../assets/catalog/capacitaciones/trabajos-peligrosos.webp'
import ergonomicosImage from '../assets/catalog/mediciones/ergonomicos.webp'
import gasesImage from '../assets/catalog/mediciones/gases.webp'
import iluminacionImage from '../assets/catalog/mediciones/iluminacion.webp'
import materialParticuladoImage from '../assets/catalog/mediciones/material-particulado.webp'
import psicosocialesImage from '../assets/catalog/mediciones/psicosociales.webp'
import ruidoLaboralImage from '../assets/catalog/mediciones/ruido-laboral.webp'
import investigacionAccidentesImage from '../assets/catalog/asesorias/investigacion-accidentes.webp'
import planAnualCapacitacionImage from '../assets/catalog/asesorias/plan-anual-capacitacion.webp'
import planesEmergenciaImage from '../assets/catalog/asesorias/planes-emergencia.webp'
import reglamentoHigieneSeguridadImage from '../assets/catalog/asesorias/reglamento-higiene-seguridad.webp'
import heroWorker from '../assets/industrial/hero-worker.jpg'
import machineryFloor from '../assets/industrial/machinery-floor.jpg'
import plantFoundry from '../assets/industrial/plant-foundry.jpg'
import kevinFajardoPlaceholder from '../assets/team/kevin-fajardo-placeholder.svg'
import mariaOrtegaPlaceholder from '../assets/team/maria-ortega-placeholder.svg'
import simonMaciasPlaceholder from '../assets/team/simon-macias-placeholder.svg'

export type SectionId =
  | 'inicio'
  | 'quienes-somos'
  | 'servicios'
  | 'blog'
  | 'aula-virtual'
  | 'descargas'
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
}

export interface HeroQuickLink {
  label: string
  href: `#${SectionId}`
}

export interface HeroBanner {
  eyebrow: string
  title: string
  description: string
  primaryCtaLabel: string
  primaryCtaHref: `#${SectionId}`
  secondaryCtaLabel: string
  secondaryCtaHref: `#${SectionId}`
  quickLinks: HeroQuickLink[]
  primaryImageSrc: string
  primaryImageAlt: string
  secondaryImageSrc: string
  secondaryImageAlt: string
}

export interface AboutHighlight {
  value: string
  label: string
  icon: LucideIcon
}

export interface TeamMember {
  name: string
  role: string
  summary: string
  imageSrc: string
  imageAlt: string
}

export interface AboutSectionData {
  eyebrow: string
  title: string
  description: string
  primaryImageSrc: string
  primaryImageAlt: string
  secondaryImageSrc: string
  secondaryImageAlt: string
  highlights: AboutHighlight[]
  teamMembers: TeamMember[]
  sectors: string[]
}

export interface VisualCard {
  badge: string
  title: string
  href: `#${SectionId}`
  imageSrc: string
  imageAlt: string
}

export interface VisualShowcaseSectionData {
  id: Extract<SectionId, 'blog' | 'aula-virtual' | 'descargas'>
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: `#${SectionId}`
  surface: 'white' | 'sand'
  cards: VisualCard[]
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
  imageSrc: string
  imageAlt: string
}

export interface CatalogItem {
  title: string
  description: string
  icon: LucideIcon
  imageSrc: string
  imageAlt: string
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
  { label: '¿Quiénes Somos?', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Blog', href: '#blog' },
  { label: 'Aula Virtual', href: '#aula-virtual' },
  { label: 'Recursos para Descargar', href: '#descargas' },
  { label: 'Contáctanos', href: '#contacto' },
]

export const heroBanner: HeroBanner = {
  eyebrow: 'Educa 24/7',
  title: 'Seguridad, formación y control con lectura directa para industria.',
  description:
    'Una landing más visual para certificaciones, capacitaciones, mediciones y asesorías en operaciones reales.',
  primaryCtaLabel: 'Explorar servicios',
  primaryCtaHref: '#servicios',
  secondaryCtaLabel: 'Contáctanos',
  secondaryCtaHref: '#contacto',
  quickLinks: [
    { label: 'Certificaciones', href: '#certificaciones' },
    { label: 'Capacitaciones', href: '#capacitaciones' },
    { label: 'Mediciones', href: '#mediciones' },
    { label: 'Asesorías', href: '#asesorias' },
  ],
  primaryImageSrc: plantFoundry,
  primaryImageAlt: 'Interior de planta industrial con estructuras metálicas y ambiente de producción.',
  secondaryImageSrc: heroWorker,
  secondaryImageAlt: 'Operario con casco inspeccionando una máquina industrial.',
}

export const aboutSection: AboutSectionData = {
  eyebrow: 'Identidad',
  title: '¿Quiénes Somos?',
  description:
    'Educa 24/7 presenta una oferta clara para personas y empresas que necesitan formación, control y acompañamiento documental sin perder velocidad comercial.',
  primaryImageSrc: heroWorker,
  primaryImageAlt: 'Operario con casco revisando maquinaria industrial en una planta.',
  secondaryImageSrc: machineryFloor,
  secondaryImageAlt: 'Piso de fábrica con maniobra industrial y componente metálico suspendido.',
  highlights: [
    { value: '4', label: 'líneas activas', icon: LayoutDashboard },
    { value: 'B2B', label: 'personas y empresas', icon: UsersRound },
    { value: 'Visual', label: 'lectura comercial', icon: ClipboardCheck },
  ],
  teamMembers: [
    {
      name: 'Simon Macias',
      role: 'Director de Operaciones',
      summary:
        'Coordina la operación técnica y la ejecución de los servicios para convertir la planificación en resultados consistentes en campo.',
      imageSrc: simonMaciasPlaceholder,
      imageAlt: 'Placeholder de retrato profesional para Simon Macias, Director de Operaciones.',
    },
    {
      name: 'María Ortega',
      role: 'Líder General del Proyecto y Directora Académica',
      summary:
        'Conduce la visión general del proyecto y la dirección académica para mantener una oferta formativa clara, vigente y aplicable.',
      imageSrc: mariaOrtegaPlaceholder,
      imageAlt:
        'Placeholder de retrato profesional para María Ortega, Líder General del Proyecto y Directora Académica.',
    },
    {
      name: 'Kevin Fajardo',
      role: 'Director de Desarrollo Profesional',
      summary:
        'Impulsa rutas de crecimiento y desarrollo profesional alineadas con certificación, empleabilidad y desempeño operativo.',
      imageSrc: kevinFajardoPlaceholder,
      imageAlt: 'Placeholder de retrato profesional para Kevin Fajardo, Director de Desarrollo Profesional.',
    },
  ],
  sectors: ['Construcción', 'Energía', 'Manufactura', 'Hidrocarburos', 'Logística', 'Mantenimiento'],
}

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
      'Programas por competencias para validar desempeño en obra, energía y operación industrial.',
    bullets: ['Construcción', 'Energía', 'Formadores'],
    icon: BadgeCheck,
    accent: 'red',
    ctaLabel: 'Ver certificaciones',
    ctaHref: '#certificaciones',
    imageSrc: prevencionRiesgosConstruccionImage,
    imageAlt: 'Equipo de construcción trabajando en una estructura elevada.',
  },
  {
    title: 'Capacitación en HSE',
    description:
      'Entrenamientos aplicados para tareas críticas con foco en prevención, respuesta y disciplina operacional.',
    bullets: ['Alturas', 'Eléctrico', 'Confinados'],
    icon: HardHat,
    accent: 'orange',
    ctaLabel: 'Ver capacitaciones',
    ctaHref: '#capacitaciones',
    imageSrc: trabajosAlturasImage,
    imageAlt: 'Trabajador asegurado mientras realiza una maniobra en altura.',
  },
  {
    title: 'Medición y Evaluación de Factores de Riesgos Laborales',
    description:
      'Servicios técnicos para identificar exposición ocupacional y convertir hallazgos en decisiones rápidas.',
    bullets: ['Ruido', 'Gases', 'Iluminación'],
    icon: Gauge,
    accent: 'green',
    ctaLabel: 'Ver mediciones',
    ctaHref: '#mediciones',
    imageSrc: materialParticuladoImage,
    imageAlt: 'Técnico utilizando equipo de evaluación ambiental en un frente operativo.',
  },
  {
    title: 'Asesoría en Seguridad y Salud Ocupacional',
    description:
      'Acompañamiento para investigación, planes, reglamentos y soporte documental en operaciones exigentes.',
    bullets: ['Investigación', 'Planes', 'Reglamentos'],
    icon: BriefcaseBusiness,
    accent: 'charcoal',
    ctaLabel: 'Ver asesorías',
    ctaHref: '#asesorias',
    imageSrc: planesEmergenciaImage,
    imageAlt: 'Mesa con mapas y materiales de planificación para contingencias.',
  },
]

export const blogSection: VisualShowcaseSectionData = {
  id: 'blog',
  eyebrow: 'Editorial',
  title: 'Blog',
  description: 'Tres lecturas rápidas para reforzar cultura HSE sin salir de la landing.',
  ctaLabel: 'Ir a contacto',
  ctaHref: '#contacto',
  surface: 'white',
  cards: [
    {
      badge: 'Prevención',
      title: 'Alturas: inspección visual antes de subir',
      href: '#capacitaciones',
      imageSrc: trabajosAlturasImage,
      imageAlt: 'Trabajador usando protección para maniobras en altura.',
    },
    {
      badge: 'Control de energía',
      title: 'LOTO: aislar antes de intervenir',
      href: '#capacitaciones',
      imageSrc: bloqueoEtiquetadoImage,
      imageAlt: 'Candado industrial colocado sobre un punto de bloqueo.',
    },
    {
      badge: 'Monitoreo',
      title: 'Mediciones que convierten hallazgos en decisiones',
      href: '#mediciones',
      imageSrc: gasesImage,
      imageAlt: 'Detector portátil sostenido por un operario para medición en campo.',
    },
  ],
}

export const virtualClassSection: VisualShowcaseSectionData = {
  id: 'aula-virtual',
  eyebrow: 'Entrenamiento digital',
  title: 'Aula Virtual',
  description: 'Una vitrina estática del tipo de experiencia que Educa 24/7 puede presentar online.',
  ctaLabel: 'Solicitar acceso',
  ctaHref: '#contacto',
  surface: 'sand',
  cards: [
    {
      badge: 'Rutas activas',
      title: 'Cursos organizados por frente operativo',
      href: '#contacto',
      imageSrc: formacionFormadoresImage,
      imageAlt: 'Grupo de trabajadores con casco durante una sesión de formación.',
    },
    {
      badge: 'Seguimiento',
      title: 'Avance visible para equipos y supervisión',
      href: '#contacto',
      imageSrc: psicosocialesImage,
      imageAlt: 'Equipo reunido alrededor de una mesa de trabajo.',
    },
    {
      badge: 'Refuerzo',
      title: 'Material listo para continuidad y repaso',
      href: '#contacto',
      imageSrc: planAnualCapacitacionImage,
      imageAlt: 'Reunión de planificación con documentos sobre la mesa.',
    },
  ],
}

export const downloadSection: VisualShowcaseSectionData = {
  id: 'descargas',
  eyebrow: 'Descargas',
  title: 'Recursos para Descargar',
  description: 'Recursos estáticos con enfoque comercial y documental, listos para mostrar interés.',
  ctaLabel: 'Solicitar recursos',
  ctaHref: '#contacto',
  surface: 'white',
  cards: [
    {
      badge: 'Catálogo',
      title: 'Catálogo de servicios',
      href: '#contacto',
      imageSrc: prevencionRiesgosConstruccionImage,
      imageAlt: 'Cuadrilla de construcción trabajando sobre una estructura metálica.',
    },
    {
      badge: 'Checklist',
      title: 'Checklist HSE',
      href: '#servicios',
      imageSrc: investigacionAccidentesImage,
      imageAlt: 'Equipo revisando planos y documentos en una reunión de campo.',
    },
    {
      badge: 'Verificación',
      title: 'Verificación documental',
      href: '#contacto',
      imageSrc: reglamentoHigieneSeguridadImage,
      imageAlt: 'Profesionales con casco revisando documentación de cumplimiento.',
    },
  ],
}

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
      'Catálogo visual de certificaciones para construcción, energía, seguridad y operación eléctrica.',
    accent: 'red',
    surface: 'white',
    items: [
      {
        title: 'Prevención de Riesgos Laborales: Construcción y Obras Públicas',
        description: 'Ruta orientada a control preventivo, supervisión y ejecución segura en obra.',
        icon: HardHat,
        imageSrc: prevencionRiesgosConstruccionImage,
        imageAlt: 'Cuadrilla de construcción trabajando sobre una estructura metálica con equipo de protección.',
      },
      {
        title: 'Prevención de Riesgos Laborales: Energía Eléctrica',
        description: 'Cobertura para maniobras, intervención segura y disciplina operacional en energía.',
        icon: Sparkles,
        imageSrc: prevencionRiesgosEnergiaElectricaImage,
        imageAlt: 'Técnico electricista revisando un tablero eléctrico con un multímetro.',
      },
      {
        title: 'Asistencia en Seguridad Industrial',
        description: 'Programa para fortalecer inspecciones, permisos y criterios de seguridad en campo.',
        icon: ShieldCheck,
        imageSrc: asistenciaSeguridadIndustrialImage,
        imageAlt: 'Inspector industrial con casco y carpeta revisando condiciones de seguridad.',
      },
      {
        title: 'Formación de Formadores',
        description: 'Diseñado para líderes internos que deben replicar estándares HSE con criterio técnico.',
        icon: BookOpenCheck,
        imageSrc: formacionFormadoresImage,
        imageAlt: 'Grupo de trabajadores con casco reunidos durante una sesión de formación en seguridad.',
      },
      {
        title: 'Instalación de Equipos y Máquinas Eléctricas',
        description: 'Enfoque en montaje, verificación y trabajo seguro con activos eléctricos industriales.',
        icon: Factory,
        imageSrc: instalacionEquiposMaquinasElectricasImage,
        imageAlt: 'Técnico ajustando maquinaria industrial con una herramienta manual.',
      },
      {
        title: 'Instalaciones Eléctricas',
        description: 'Buenas prácticas de ejecución, control y soporte documental para instalaciones en campo.',
        icon: Wrench,
        imageSrc: instalacionesElectricasImage,
        imageAlt: 'Operario frente a un panel eléctrico industrial durante labores de instalación.',
      },
    ],
  },
  {
    id: 'capacitaciones',
    eyebrow: 'Nuestras Capacitaciones',
    title: 'Capacitaciones HSE pensadas para práctica, respuesta y prevención',
    description:
      'Entrenamientos prácticos para tareas críticas, control preventivo y respuesta operativa en campo.',
    accent: 'orange',
    surface: 'sand',
    items: [
      {
        title: 'Prevención de Trabajos en Alturas',
        description: 'Entrenamiento sobre inspección, anclajes, ejecución y control de tareas en altura.',
        icon: RadioTower,
        imageSrc: trabajosAlturasImage,
        imageAlt: 'Trabajador asegurado mientras asciende en una labor de altura.',
      },
      {
        title: 'Trabajos en Espacios Confinados',
        description: 'Cobertura para ingreso, monitoreo y coordinación segura en recintos restringidos.',
        icon: AlarmSmoke,
        imageSrc: espaciosConfinadosImage,
        imageAlt: 'Trabajador dentro de un túnel industrial que sugiere una operación en espacio confinado.',
      },
      {
        title: 'Trabajos Peligrosos',
        description: 'Bloque general para actividades de alto riesgo que requieren disciplina operacional.',
        icon: ShieldPlus,
        imageSrc: trabajosPeligrososImage,
        imageAlt: 'Soldador realizando una tarea de alto riesgo sobre una pieza metálica.',
      },
      {
        title: 'Prevención en el Manejo de H2S',
        description: 'Preparación para detección, control preventivo y actuación frente a atmósferas peligrosas.',
        icon: Flame,
        imageSrc: manejoH2SImage,
        imageAlt: 'Operario sosteniendo un equipo portátil de medición en entorno industrial.',
      },
      {
        title: 'Prevención de Riesgos Eléctricos',
        description: 'Buenas prácticas para intervención segura y control de energía en operación.',
        icon: Sparkles,
        imageSrc: riesgosElectricosImage,
        imageAlt: 'Electricista con equipo de protección trabajando frente a un sistema industrial.',
      },
      {
        title: 'Bloqueo y Etiquetado',
        description: 'Entrenamiento orientado a LOTO, aislamiento y verificación de energías peligrosas.',
        icon: Cog,
        imageSrc: bloqueoEtiquetadoImage,
        imageAlt: 'Candado industrial colocado sobre un punto de bloqueo para control de energías.',
      },
    ],
  },
  {
    id: 'mediciones',
    eyebrow: 'Nuestras Mediciones',
    title: 'Mediciones laborales para evaluar exposición y priorizar acciones correctivas',
    description:
      'Evaluaciones ocupacionales con lectura rápida para control, cumplimiento y seguimiento técnico.',
    accent: 'green',
    surface: 'white',
    items: [
      {
        title: 'Medición de Material Particulado',
        description: 'Evaluación de presencia de partículas en ambientes de trabajo y frentes de operación.',
        icon: ScanSearch,
        imageSrc: materialParticuladoImage,
        imageAlt: 'Técnico en obra utilizando un equipo de muestreo ambiental en campo.',
      },
      {
        title: 'Medición de Niveles de Ruido Laboral',
        description: 'Lectura técnica para revisar exposición a ruido y definir controles en puestos críticos.',
        icon: Siren,
        imageSrc: ruidoLaboralImage,
        imageAlt: 'Trabajador en taller usando herramientas con potencial de exposición a ruido.',
      },
      {
        title: 'Medición de Gases',
        description: 'Cobertura para detección de atmósferas peligrosas y condiciones de ingreso seguro.',
        icon: AlarmSmoke,
        imageSrc: gasesImage,
        imageAlt: 'Mano sosteniendo un detector portátil para medición de gases en ambiente industrial.',
      },
      {
        title: 'Medición de Iluminación',
        description: 'Revisión de niveles lumínicos para seguridad, productividad y cumplimiento ocupacional.',
        icon: Lightbulb,
        imageSrc: iluminacionImage,
        imageAlt: 'Técnicos revisando luminarias desde una escalera en un espacio de trabajo.',
      },
      {
        title: 'Evaluación de Riesgos Ergonómicos',
        description: 'Análisis de tareas, posturas y exigencia física en actividades operativas.',
        icon: UsersRound,
        imageSrc: ergonomicosImage,
        imageAlt: 'Persona sentada frente a una estación de trabajo para evaluación ergonómica.',
      },
      {
        title: 'Evaluación de Riesgos Psicosociales',
        description: 'Diagnóstico de condiciones que afectan desempeño, bienestar y sostenibilidad del equipo.',
        icon: Building2,
        imageSrc: psicosocialesImage,
        imageAlt: 'Equipo colaborando alrededor de una mesa en una reunión de oficina.',
      },
    ],
  },
  {
    id: 'asesorias',
    eyebrow: 'Nuestras Asesorías',
    title: 'Asesorías para sostener sistemas, investigación y soporte documental',
    description:
      'Acompañamiento documental y operativo para investigación, planes, reglamentos y gestión preventiva.',
    accent: 'charcoal',
    surface: 'sand',
    items: [
      {
        title: 'Asesoría en Investigación de Accidentes Laborales y Enfermedades Ocupacionales',
        description: 'Soporte para análisis, documentación y planes de acción posteriores al evento.',
        icon: ShieldCheck,
        imageSrc: investigacionAccidentesImage,
        imageAlt: 'Equipo revisando planos y documentos durante una investigación en campo.',
      },
      {
        title: 'Elaboración de Planes de Emergencia y Contingencia',
        description: 'Construcción de rutas de respuesta con enfoque operativo y documentación lista para revisión.',
        icon: Siren,
        imageSrc: planesEmergenciaImage,
        imageAlt: 'Mesa con mapas de planificación para respuesta de emergencia.',
      },
      {
        title: 'Levantamiento y Ejecución del Plan Anual de Capacitación de Seguridad y Salud Ocupacional',
        description: 'Acompañamiento para ordenar la programación anual y su despliegue por perfiles.',
        icon: ClipboardCheck,
        imageSrc: planAnualCapacitacionImage,
        imageAlt: 'Reunión de planificación con documentos y seguimiento de capacitación.',
      },
      {
        title: 'Elaboración del Reglamento de Higiene y Seguridad con registro en el Ministerio del Trabajo',
        description: 'Soporte técnico para reglamentos, estructura documental y preparación para registro.',
        icon: FileBadge2,
        imageSrc: reglamentoHigieneSeguridadImage,
        imageAlt: 'Profesionales con casco revisando documentos de cumplimiento y seguridad.',
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
    description: 'Solicita piezas visuales para revisar la oferta desde una sola landing.',
    icon: FileBadge2,
    links: [
      { label: 'Ver recursos', href: '#descargas' },
      { label: 'Solicitar catálogo', href: '#contacto' },
    ],
  },
  {
    title: 'Verificación de certificados',
    description: 'Accesos rápidos para llevar la conversación hacia certificaciones y soporte.',
    icon: BadgeCheck,
    links: [
      { label: 'Ver certificaciones', href: '#certificaciones' },
      { label: 'Ir a servicios', href: '#servicios' },
    ],
  },
  {
    title: 'Contáctanos',
    description: 'Canales actuales de Educa 24/7 para coordinación inicial y seguimiento comercial.',
    icon: UsersRound,
    details: contactDetails.map((item) => `${item.label}: ${item.value}`),
    links: [{ label: 'Ir al inicio', href: '#inicio' }],
  },
  {
    title: 'Áreas de interés',
    description: 'Recorrido rápido por los bloques principales de la nueva home.',
    icon: Building2,
    links: [
      { label: '¿Quiénes Somos?', href: '#quienes-somos' },
      { label: 'Blog', href: '#blog' },
      { label: 'Aula Virtual', href: '#aula-virtual' },
      { label: 'Descargas', href: '#descargas' },
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
