export const languages = {
  ja: '日本語',
  en: 'English',
} as const

export const defaultLang = 'ja' as const

export type Lang = keyof typeof languages

export const ui = {
  ja: {
    // Header
    'site.title': 'trasta.dev',

    // About page
    'about.title': 'trasta',
    'about.description': 'trastaのぺーじ',
    'about.works': 'やってきたこと',
    'about.blog': 'ブログ',

    // Index page
    'index.title': 'trasta.dev',
    'index.description': 'trastaのぺーじ',
    'index.greeting': "Hi, I'm trasta.",
    'index.aboutMe': 'About me.',

    // Blog page
    'blog.suggestEdit': 'GitHubで修正を提案する',
    'blog.post': 'Post',

    // Profile
    'profile.name': 'trasta / とらすた',

    // Footer
    'footer.privacyPolicy': 'Privacy Policy',

    // 404
    '404.title': 'Not Found',
    '404.message': 'The page you are looking for does not exist.',
    '404.backHome': 'Back to Home',
  },
  en: {
    // Header
    'site.title': 'trasta.dev',

    // About page
    'about.title': 'trasta',
    'about.description': "trasta's page",
    'about.works': 'Works',
    'about.blog': 'Blog',

    // Index page
    'index.title': 'trasta.dev',
    'index.description': "trasta's page",
    'index.greeting': "Hi, I'm trasta.",
    'index.aboutMe': 'About me.',

    // Blog page
    'blog.suggestEdit': 'Suggest an edit on GitHub',
    'blog.post': 'Post',

    // Profile
    'profile.name': 'trasta',

    // Footer
    'footer.privacyPolicy': 'Privacy Policy',

    // 404
    '404.title': 'Not Found',
    '404.message': 'The page you are looking for does not exist.',
    '404.backHome': 'Back to Home',
  },
} as const
