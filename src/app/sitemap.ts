import { BASE_URL } from '@/config'
import { routes } from '@/data'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const sitemap = (): MetadataRoute.Sitemap =>
    routes.map((route) => ({
        url: `${BASE_URL}${route.path === '/' ? '' : route.path}`,
        changeFrequency: 'monthly',
        priority: route.path === '/' ? 1 : 0.8,
    }))

export default sitemap
