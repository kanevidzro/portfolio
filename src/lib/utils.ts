import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date)
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, '')
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case 'ai':
      return 'bg-yellow-300'
    case 'design':
      return 'bg-lime-300'
    case 'product':
      return 'bg-green-300'
    case 'engineering':
      return 'bg-purple-300'
    case 'productivity':
      return 'bg-pink-300'
    case 'learning':
      return 'bg-blue-300'
    case 'opensource':
      return 'bg-orange-400'
    case 'thoughts':
      return 'bg-red-400'
    case 'tools':
      return 'bg-cyan-300'
    case 'work':
      return 'bg-teal-300'
    default:
      return 'bg-gray-300'
  }
}
