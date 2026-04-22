import Contact from '@/src/components/shared/contact'
import { buildLocalizedPageMetadata } from '@/src/utils/page-metadata-locale'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> =>
  buildLocalizedPageMetadata('meta.contact.title', 'meta.contact.description', '/contact')

const page = () => {
  return <Contact />
}

export default page
