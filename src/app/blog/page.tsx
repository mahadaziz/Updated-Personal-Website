import ComingSoon from '@/app/coming-soon'
import { Layout } from '@/components/layout'
import { OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata } from 'next'

const title = 'Blog'
const description =
    'Explore a collection of articles and blog posts by Mahad Aziz. Discover a variety of topics, ranging from web development to design and technology.'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: OPEN_GRAPH_IMAGE,
                width: 1280,
                height: 800,
            },
        ],
    },
    twitter: {
        title,
        description,
        images: [OPEN_GRAPH_IMAGE],
    },
}

const BlogPage = () => {
    return (
        <Layout>
            <ComingSoon />
        </Layout>
    )
}

export default BlogPage
