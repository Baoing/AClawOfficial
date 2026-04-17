import { FooterData } from '../interface';

export const footerData: FooterData = {
  logo: {
    src: '/images/logo/logo-white.svg',
    alt: 'AIClawers',
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
    email: 'will@baoea.com',
    emailHref: 'mailto:will@baoea.com',
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
        { label: 'Career', href: '#' },
        { label: 'Case Studies', href: '/use-case' },
        { label: 'Contact us', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Tutorial', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal Policies',
      links: [
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Refund Policy', href: '#' },
        { label: 'GDPR Compliance', href: '#' },
        { label: 'Affiliate Policy', href: '#' },
      ],
    },
  ],
  bottomBar: {
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Settings', href: '#' },
    ],
  },
};
