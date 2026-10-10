import wordmark from '../../assets/brand/logo-wordmark.png'
import fullLogo from '../../assets/brand/logo-full.png'
import symbol from '../../assets/brand/logo-symbol.png'

export function BrandLogo({
  variant = 'wordmark',
}: {
  variant?: 'wordmark' | 'full' | 'symbol'
}) {
  const src =
    variant === 'full' ? fullLogo : variant === 'symbol' ? symbol : wordmark
  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <img
        src={src}
        alt={
          variant === 'full'
            ? 'EDUCA 24/7 — Asesoría y Formación en SISO, Educación y Sostenibilidad'
            : 'EDUCA 24/7'
        }
      />
    </span>
  )
}
