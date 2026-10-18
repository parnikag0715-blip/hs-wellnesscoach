import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HS Wellness Coach',
    short_name: 'HSwellness',
    description: 'Your personal wellness coach',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0070f3',
  };
}
