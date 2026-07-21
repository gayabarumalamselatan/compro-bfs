import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildMediaUrl(url?: string | null) {
  if (!url) return '';

  let path = url;
  try {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      const parsedUrl = new URL(url);
      path = parsedUrl.pathname;
    }
  } catch (e) {
    // ignore
  }

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_PATH_URL || '';
  return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
