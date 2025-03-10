import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ar', 'en', 'tr', 'id', 'ru'],

  defaultLocale: 'en',
});
