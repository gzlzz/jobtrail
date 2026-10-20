# Roadmap

Cada casilla es un buen candidato a **issue de GitHub** + rama + PR propio. Trabajar así deja historial profesional visible en el repo.

## Semana 1 · Base y CRUD
- [x] Monorepo, Next.js, Prisma, Docker Compose y CI
- [ ] Primera migración (`npm run db:migrate -- --name init`) y seed
- [ ] Autenticación con Auth.js (magic link por email o GitHub OAuth)
- [ ] CRUD de candidaturas (crear, editar, borrar) con Server Actions y validación con Zod
- [ ] Desplegar en Vercel + Neon y poner el enlace en el README

## Semana 2 · Tablero y estadísticas
- [ ] Tablero Kanban con drag & drop (dnd-kit) que registra `StatusEvent`
- [ ] Filtros por portal y búsqueda
- [ ] Página de estadísticas: tasa de respuesta por portal, embudo por fase
- [ ] Exportar a CSV
- [ ] Tests unitarios (Vitest) de la lógica de estadísticas

## Semana 3 · Extensión de navegador
- [ ] `apps/extension` con Manifest V3 y TypeScript
- [ ] Extraer empresa/puesto de LinkedIn, InfoJobs e Indeed
- [ ] Endpoint `POST /api/applications` autenticado con token personal
- [ ] Publicar como extensión "unpacked" con instrucciones en el README

## Semana 4 · Pulido para recruiters
- [ ] Recordatorios de seguimiento (Vercel Cron + Resend)
- [ ] Tests E2E con Playwright del flujo principal en CI
- [ ] GIF de demo y vídeo de 1 minuto en el README
- [ ] Conseguir 3-5 usuarios reales (compañeros de clase) y recoger feedback en issues
- [ ] Sección "Decisiones técnicas" completa
