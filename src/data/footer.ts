import { FooterData } from '../interface';

export const footerData: FooterData = {
  logo: {
    src: '/images/logo/logo-white.svg',
    alt: 'AI Clawers',
    href: '/',
  },
  address: {
    label: 'Address:',
    text: '9 Queen\'s Road Central, Central, Hong Kong',
  },
  contact: {
    label: 'Contact:',
    phone: '+1 (202) 555-0130',
    phoneHref: 'tel:+12025550130',
    email: 'contact@aiclawers.com',
    emailHref: 'mailto:contact@aiclawers.com',
  },
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'X', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
  linkGroups: [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Why Choose Us', href: '/why-us' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Case Studies', href: '/projects' },
        { label: 'Contact us', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/faq' },
        { label: 'Documentation', href: '#' },
        { label: 'Shopify tutorial', href: 'https://shopify.baoea.com/' },
      ],
    },
    {
      title: 'Legal Policies',
      links: [
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'GDPR Compliance', href: '/gdpr' },
      ],
    },
  ],
  bottomBar: {
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Settings', href: '/privacy#cookies' },
    ],
  },
};
