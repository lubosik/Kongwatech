import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kongwa Tech',
    short_name: 'Kongwa Tech',
    description:
      'Technology and strategy holding company building ventures across AI, digital infrastructure and community.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F0E7',
    theme_color: '#07192F',
    icons: [
      {
        src: '/images/kt-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
