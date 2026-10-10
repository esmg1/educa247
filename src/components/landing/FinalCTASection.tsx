import { ArrowUpRight, MessageCircle } from 'lucide-react'
import type { ContactDetail } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Button } from '../ui/Button'
export function FinalCTASection({
  contactDetails,
}: {
  contactDetails: ContactDetail[]
}) {
  return (
    <SectionShell id="contacto" surface="dark">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">Contáctanos</p>
          <h2>El siguiente paso empieza con una conversación.</h2>
          <p>
            Cuéntanos qué necesita tu organización. Te orientamos sobre
            formación, certificación, mediciones y asesoría en seguridad y salud
            ocupacional.
          </p>
          <Button
            href="https://wa.me/593993432822"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} />
            Escríbenos por WhatsApp
          </Button>
          <span className="contact-number">+593 99 343 2822</span>
        </div>
        <div className="contact-options">
          <h3>¿Cómo podemos ayudarte?</h3>
          <a
            href="https://wa.me/593993432822?text=Hola%2C%20quisiera%20una%20propuesta%20de%20formaci%C3%B3n%20para%20mi%20equipo."
            target="_blank"
            rel="noreferrer"
          >
            Formación para mi equipo
            <ArrowUpRight size={20} />
          </a>
          <a
            href="https://wa.me/593993432822?text=Hola%2C%20necesito%20orientaci%C3%B3n%20en%20gesti%C3%B3n%20SST."
            target="_blank"
            rel="noreferrer"
          >
            Asesoría para mi empresa
            <ArrowUpRight size={20} />
          </a>
          <a
            href="https://wa.me/593993432822?text=Hola%2C%20quisiera%20solicitar%20el%20cat%C3%A1logo%20de%20servicios."
            target="_blank"
            rel="noreferrer"
          >
            Solicitar catálogo
            <ArrowUpRight size={20} />
          </a>
          <a
            href="https://wa.me/593993432822?text=Hola%2C%20necesito%20soporte%20para%20la%20verificaci%C3%B3n%20de%20un%20certificado."
            target="_blank"
            rel="noreferrer"
          >
            Verificación de certificados
            <ArrowUpRight size={20} />
          </a>
          <div className="contact-social">
            {contactDetails
              .filter((d) => d.label !== 'WhatsApp')
              .map((d) => (
                <a key={d.label} href={d.href} target="_blank" rel="noreferrer">
                  {d.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
