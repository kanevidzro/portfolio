import type { Metadata, Socials, MenuItem } from './types'

export const WRITINGS: Metadata = {
  TITLE: 'Writings',
  DESCRIPTION: 'Essays on my experiences and evolving ideas.',
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION: 'Things i have worked on or is working on.',
}

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'My personal portfolio and internet space.',
}

export const THOUGHTS: Metadata = {
  TITLE: 'Thoughts',
  DESCRIPTION: 'Personal reflections shaped by my experience.',
}

export const SOCIALS: Socials = [
  {
    NAME: '@x',
    URL: 'https://x.com/kanevidzro',
  },
  {
    NAME: 'email',
    URL: 'mailto:kane@kanevidzro.com',
  },
  {
    NAME: 'github',
    URL: 'https://github.com/kanevidzro',
  },
  {
    NAME: 'linkedin',
    URL: 'https://www.linkedin.com/in/kanevidzro',
  },
]

export const menuItems: MenuItem = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'writings',
    url: '/writings',
  },
  {
    label: 'thoughts',
    url: '/thoughts',
  },
  {
    label: 'projects',
    url: '/projects',
  },
]

export const projects = [
  {
    name: 'Xtottel',
    url: 'https://www.xtottel.com',
    image: '/projects/xtottel.png',
  },
  {
    name: 'Sendexa',
    url: 'https://www.sendexa.co',
    image: '/projects/sendexa.png',
  },
  {
    name: 'HogMog',
    url: 'https://hogmog.vercel.app',
    image: '/tools/bun.svg',
  },
]

export const education = [
  {
    school: {
      name: 'CYO Technical / Vocational Institute',
      image: '/assets/ctvet.png',
    },
    course: 'CTVET - Computer Hardware Technology',
    date: '2023 — 2025',
  },
  {
    school: {
      name: 'Agorve South R.C. Basic school',
      image: '/assets/waec.png',
    },
    course: 'BECE - Compulsory Education',
    date: '2011 — 2022',
  },
]
