export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'They rebuilt our OS 2.0 theme without breaking merchandising. Core Web Vitals are up and the team finally trusts pushing promos on their own.',
    name: 'Lena Torres',
    role: 'CMO, D2C skincare brand',
    imageSrc: '/images/opai-avatar-img-01.png',
    imageAlt: 'Lena Torres',
  },
  {
    id: '2',
    quote:
      'Our embedded app shipped on schedule and passed App Store review first try. Checkout edge cases we dreaded were handled before launch.',
    name: 'Maya Chen',
    role: 'CTO, omnichannel retailer',
    imageSrc: '/images/opai-avatar-img-02.png',
    imageAlt: 'Maya Chen',
  },
  {
    id: '3',
    quote:
      'They joined standups like an internal squad—clear on Liquid, APIs, and what merchants actually feel in admin. Velocity went up immediately.',
    name: 'Derek Singh',
    role: 'Head of Product, Shopify Plus merchant',
    imageSrc: '/images/opai-avatar-img-03.png',
    imageAlt: 'Derek Singh',
  },
  {
    id: '4',
    quote:
      'Fulfillment rules, tags, and metafields finally line up between Shopify and our 3PL. Ops stopped living in spreadsheets after the first sprint.',
    name: 'Laura Fernandez',
    role: 'Director of Operations, apparel brand',
    imageSrc: '/images/opai-avatar-img-04.png',
    imageAlt: 'Laura Fernandez',
  },
  {
    id: '5',
    quote:
      'Migration off our old stack was blunt about risks and timelines. Go-live weekend was boring—in the best way—and revenue did not blink.',
    name: 'Jonas Müller',
    role: 'VP Ecommerce, home goods',
    imageSrc: '/images/opai-avatar-img-05.png',
    imageAlt: 'Jonas Müller',
  },
];
