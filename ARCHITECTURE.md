# Architecture Overview

This project follows **Clean Architecture** and **Atomic Design** to keep the codebase maintainable and scalable.

---

## Clean Architecture Layers

### 1. Domain (`src/domain/`)

**Responsibility:** Core business entities and types. No framework or UI dependencies.

- **`entities/`** – Pure data shapes used across the app:
  - `project.ts`, `skill.ts`, `experience.ts`, `education.ts`, `contact.ts`, `navigation.ts`, `achievement.ts`, `form.ts`
- **`index.ts`** – Re-exports all entities.

**Import:** `import type { Project, SkillCategory } from '@/domain/entities';`

---

### 2. Application (`src/application/`)

**Responsibility:** Use cases, app logic, and orchestration. Depends only on domain.

- **`hooks/`** – React hooks (scroll, translations):
  - `useScroll.ts` – scroll position, `scrollToSection`, `scrollToTop`
  - `useTranslations.ts` – re-export from next-intl
- **`services/`** – Application services:
  - `navigation.service.ts` – `getNavItems(t)` for nav links
- **`index.ts`** – Re-exports hooks and services.

**Import:** `import { useScroll, scrollToSection, getNavItems } from '@/application/hooks';` or `@/application/services';`

---

### 3. Infrastructure (`src/infrastructure/`)

**Responsibility:** External concerns (API, config, i18n wiring). Kept minimal.

- **`constants/`** – App-wide constants (extend with API URLs, feature flags, etc.).
- **i18n** stays at **`src/i18n/`** (required by next-intl): `routing`, `request`, `navigation`.

---

### 4. Presentation (`src/presentation/` + `src/components/`)

**Responsibility:** UI, contexts, and presentation helpers.

- **`presentation/contexts/`** – React context (e.g. `ThemeContext`).
- **`presentation/lib/`** – Presentation utilities (e.g. `animations`).
- **`components/`** – Atomic Design components (see below).

**Import:**  
`import { ThemeProvider, useTheme } from '@/presentation/contexts/ThemeContext';`  
`import { containerVariants, itemVariants } from '@/presentation/lib/animations';`

---

## Atomic Design (Components)

Components live under **`src/components/`** and follow Atomic Design:

| Level       | Path              | Role |
|------------|-------------------|------|
| **Atoms**  | `components/atoms/` | Smallest UI units: Button, Input, Badge, Typography, Link, ThemeToggle, LanguageSwitcher. |
| **Molecules** | `components/molecules/` | Compositions of atoms: NavItem, StatCard, ProjectCard, SkillItem, SocialLink, AchievementCard, EducationCard, ExperienceCard, CertificationCard. |
| **Organisms** | `components/organisms/` | Section-level blocks: Header, Hero, About, Skills, Experience, Projects, Education, Contact, Footer. |
| **Templates** | `components/templates/` | Page structure: PageLayout, SectionContainer. |

**Rules:**

- **Atoms** – No imports from molecules or organisms.
- **Molecules** – Use only atoms (and domain types when needed).
- **Organisms** – Use molecules and atoms; may use application hooks/services and domain entities.
- **Templates** – Compose organisms and define layout.

**Import:**  
`import { Button } from '@/components/atoms/Button';`  
`import Header from '@/components/organisms/Header';`  
`import { SectionContainer } from '@/components/templates/SectionContainer';`

---

## Dependency Flow

```
app (pages, layout)
  → components (organisms, templates, molecules, atoms)
  → application (hooks, services)
  → domain (entities)

presentation (contexts, lib)
  → used by components

i18n (routing, request, navigation)
  → used by app and infrastructure
```

- **Domain** has no dependencies on other layers.
- **Application** depends only on **domain**.
- **Presentation** (components, contexts, lib) may use **domain** and **application**; no direct dependency on infrastructure except via app/i18n.
- **App** wires infrastructure (e.g. i18n) and presentation together.

---

## Path Aliases

`tsconfig.json` uses:

- `@/*` → `./src/*`

So:

- `@/domain/entities` → `src/domain/entities`
- `@/application/hooks` → `src/application/hooks`
- `@/application/services` → `src/application/services`
- `@/presentation/contexts` → `src/presentation/contexts`
- `@/presentation/lib` → `src/presentation/lib`
- `@/components/*` → `src/components/*`
- `@/i18n/*` → `src/i18n/*`

---

## File Naming

- **Domain:** `kebab-case` (e.g. `navigation.ts`, `skill.ts`).
- **Components:** `PascalCase` for components (e.g. `Button.tsx`, `SectionContainer.tsx`).
- **Services:** `kebab-case` with `.service` when useful (e.g. `navigation.service.ts`).
