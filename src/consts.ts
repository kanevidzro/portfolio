import type { Site, Metadata, Socials, MenuItem } from './types'

export const SITE: Site = {
  TITLE: 'My Personal Website',
  NAME: 'Kane Vidzro',
}

export const WRITINGS: Metadata = {
  TITLE: 'Writings',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    'A collection of my projects, with links to repositories and demos.',
}

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION:
    'Welcome to my personal website where I share my writings and projects.',
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
