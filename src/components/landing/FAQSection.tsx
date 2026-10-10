import { Plus } from 'lucide-react'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'
const questions = [
  [
    '¿Por dónde empieza la asesoría en SST?',
    'Comenzamos revisando la situación de tu organización: actividad, riesgos y documentación disponible. Con ese punto de partida definimos las prioridades y una propuesta de acompañamiento.',
  ],
  [
    '¿A quién está dirigido Igualdad 2026?',
    'A colaboradores, líderes y responsables de talento humano que buscan comprender la igualdad salarial y promover un entorno de trabajo respetuoso. La formación aborda derechos laborales, igualdad de género, prevención de violencia y trabajo de igual valor.',
  ],
  [
    '¿Cómo se organiza la formación virtual?',
    'Igualdad 2026 conserva una duración de 40 horas, distribuida en cuatro módulos de diez horas. La modalidad asincrónica permite organizar el estudio; nuestro equipo te informa sobre acceso, seguimiento y condiciones de participación.',
  ],
  [
    '¿Cómo consulto un certificado o solicito el catálogo?',
    'Escríbenos por nuestro canal de WhatsApp. El equipo te orientará en la consulta del certificado o te compartirá el portafolio y los requisitos del servicio que te interesa.',
  ],
]
export function FAQSection() {
  return (
    <SectionShell id="preguntas">
      <div className="faq-grid">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Información para dar el siguiente paso."
          description="Resolvemos las dudas más habituales sobre asesoría, formación y canales de atención."
        />
        <div>
          {questions.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>
                {question}
                <Plus size={19} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
