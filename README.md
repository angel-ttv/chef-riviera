# Chef Riviera / The Chef VIP — Next.js + Firebase (rescatado 6 nov 2026)

Chef privado a domicilio en la Riviera Maya (Playacar, Puerto Aventuras, Tulum). La web convierte tu villa en restaurante 5 estrellas.

## Lo que hace (según `app/page.tsx`)
- Hero: "Buena cocina en la comodidad de tu hogar."
- 3 experiencias (tarifas base hasta 6 personas):
  1. **Cena Riviera Clásica** — $8,500 MXN/evento, menú de 3 tiempos.
  2. **Experiencia The Chef VIP** — $9,800 MXN/evento, menú 100% personalizado de 4 tiempos, ingredientes premium y pesca del día.
  3. **Degustación 5 Tiempos** — $12,500 MXN/evento, maridaje sugerido, emplatado artístico, sommelier opcional.
- Métricas publicadas: 68 eventos (Ene–Abr 2026), 142 clientes en base de datos, 8 chefs certificados, rating 4.97.
- Instagram: @the__chef__vip
- Formulario de reserva: componente `ReservaForm` (`components/ReservaForm`).

## Stack
Next.js 16.2.4, React 19, Tailwind 4, TypeScript, Firebase 12. Proyecto Vercel `chef-riviera`.

## Rescatado
Configuración + `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `public/` (logo.svg de The Chef VIP, favicon, íconos Next.js).

## FALTA
- `components/ReservaForm.tsx` (el formulario de reserva) y cualquier otro componente.
- Config de Firebase / conexión (si la hay) y resto de `app/`.
