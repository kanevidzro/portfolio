import type { Metadata, Socials, MenuItem } from './types'

export const WRITINGS: Metadata = {
  TITLE: 'Writings',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION: 'Showcasing my projects, with demos and code repositories.',
}

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION:
    'Kane Vidzro’s personal site: writings, projects, and tech insights.',
}

export const THOUGHTS: Metadata = {
  TITLE: 'Thoughts',
  DESCRIPTION: 'Random musings and ideas that I want to share with the world.',
}

export const SOCIALS: Socials = [
  {
    NAME: '@x',
    URL: 'https://x.com/kanevidzro',
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
