# i18n Setup Guide

## Overview
The portfolio now supports bilingual content (English and Arabic) using `next-intl`.

## Structure

### Translation Files
- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations

### Configuration Files
- `src/i18n/request.ts` - i18n configuration
- `middleware.ts` - Locale detection and routing
- `next.config.js` - Next-intl plugin configuration

### Components
- `src/components/atoms/LanguageSwitcher.tsx` - Language switcher component

## Usage in Components

### Basic Usage
```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('sectionName');
  
  return <h1>{t('title')}</h1>;
}
```

### Nested Translations
```tsx
const t = useTranslations('about');
const highlights = t.raw('highlights.cleanCode.title');
```

## Adding New Translations

1. Add the key-value pair to both `messages/en.json` and `messages/ar.json`
2. Use the translation in your component with `useTranslations`

## Language Switcher

The language switcher is automatically included in the Header component. Users can switch between English and Arabic.

## RTL Support

Arabic locale automatically applies RTL (right-to-left) direction and uses the Cairo font for better Arabic typography.

## Next Steps

To complete the i18n implementation, update the remaining components:
- About.tsx
- Skills.tsx
- Experience.tsx
- Projects.tsx
- Education.tsx
- Contact.tsx
- Footer.tsx

Each component should use `useTranslations` hook to get translated strings.
