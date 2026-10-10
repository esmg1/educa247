# EDUCA 24/7

Spanish-language institutional website for consulting and training in occupational safety, education and sustainability. Built with React, TypeScript, Vite and Tailwind CSS.

## Development and checks

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run test:run
```

The production build is generated in `dist/`. The existing Nginx deployment serves `/home/educa247/dist` on `educa24-7.org`.

## Content and branding

The supplied EDUCA wordmark, full logo, symbol and LOTO photograph are in `src/assets/brand/` and `src/assets/industrial/loto.png`. Logo frames hide the supplied images' outer whitespace with CSS, preserving the original artwork. The favicon embeds the supplied symbol. The four team members' names, roles and biographies remain in `src/data/landingContent.ts`.

The October 2026 update uses original copy informed by these references:

- https://admindu.com.ec/asesoria-seguridad-salud-trabajo — diagnosis, implementation, regularization and ongoing SST support.
- https://www.corporacionlideres.com/normativa-igualdad-salarial/ — accessible modular learning, workplace rights, gender equality and work of equal value.
- https://equidad.cursum.ec/ — clear program structure and organization-focused training.
- https://www.trabajo.gob.ec/expedimos-el-reglamento-de-cumplimiento-de-la-ley-organica-para-la-igualdad-salarial-entre-mujeres-y-hombres-2/ — primary reference for MDT-2025-006 and the 40-hour annual training requirement.

Competitor prices, testimonials, client counts, partnerships, accreditations and legal guarantees are not represented as EDUCA claims. Existing EDUCA course details, contact channels and service catalogues are preserved. Learning themes describe the programme's subject areas; the existing duration remains four modules of ten hours. Resources and certificate inquiries are handled by the existing WhatsApp channel.
