import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NextLink from 'next/link'

const ComingSoon = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-4">
            <Image src="/icons/rocket.jpg_large" alt="Rocket" width={48} height={48} />
            <Typography variant="h1">Exciting things are on the way!</Typography>
            <p className="max-w-2xl text-center text-xl text-muted-foreground">
                We&apos;re working hard to bring you something amazing. Stay tuned for updates!
            </p>
            <NextLink href="/" aria-label="Back to home">
                <Button size="lg" className="mt-4 uppercase" aria-label="Back to home">
                    Back to home
                </Button>
            </NextLink>
        </div>
    )
}

export default ComingSoon
