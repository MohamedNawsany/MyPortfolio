import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export const locales = routing.locales;
export type Locale = (typeof locales)[number];

function isValidLocale(locale: string | undefined): locale is Locale {
  return locale != null && (routing.locales as readonly string[]).includes(locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  if (requested != null && !(routing.locales as readonly string[]).includes(requested)) {
    notFound();
  }
  const locale = isValidLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
