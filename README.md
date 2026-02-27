# Mohamed Ahmed EL-Nawsany - Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS, following Atomic Design principles.

## 🚀 Features

- **Next.js 14** with App Router
- **Atomic Design Architecture** - Clean component organization (atoms, molecules, organisms, templates)
- **TypeScript** - Full type safety
- **Tailwind CSS** - Modern, responsive styling
- **Framer Motion** - Smooth animations
- **EmailJS Integration** - Contact form functionality
- **SEO Optimized** - Meta tags and Open Graph support
- **Vercel Ready** - Optimized for deployment

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks (Button, Input, Typography, Badge, Link)
│   │   ├── molecules/      # Simple component groups (NavItem, SocialLink, ProjectCard, etc.)
│   │   ├── organisms/      # Complex components (Header, Hero, About, Skills, etc.)
│   │   └── templates/      # Page-level layouts (PageLayout, SectionContainer)
│   ├── lib/                # Utilities and helpers (animations)
│   ├── hooks/              # Custom React hooks (useScroll)
│   ├── types/              # TypeScript type definitions
│   └── constants/          # Static data (navigation items)
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

The project is optimized for Vercel deployment with automatic builds and preview deployments.

## 🎨 Atomic Design Structure

- **Atoms**: Basic UI elements (buttons, inputs, typography)
- **Molecules**: Simple component combinations (nav items, cards, form fields)
- **Organisms**: Complex sections (header, hero, about, skills, etc.)
- **Templates**: Page-level layouts

## 📝 Environment Variables

For EmailJS contact form, ensure you have:
- EmailJS Service ID
- EmailJS Template ID
- EmailJS Public Key

These are currently configured in `src/components/organisms/Contact.tsx`.

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form
- **Lucide React** - Icons

## 📄 License

© 2025 Mohamed Ahmed EL-Nawsany. All rights reserved.
