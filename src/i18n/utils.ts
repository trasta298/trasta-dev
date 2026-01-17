import { ui, defaultLang, type Lang } from './ui'

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getLocalePath(path: string, lang: Lang): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (lang === defaultLang) {
    return normalizedPath
  }

  return `/${lang}${normalizedPath}`
}

export function getAlternatePath(currentPath: string, targetLang: Lang): string {
  const pathWithoutLang = currentPath.replace(/^\/(en|ja)/, '') || '/'
  return getLocalePath(pathWithoutLang, targetLang)
}

export function stripLangPrefix(path: string): string {
  return path.replace(/^\/(en|ja)/, '') || '/'
}

export { defaultLang, type Lang }
