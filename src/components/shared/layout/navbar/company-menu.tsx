'use client';

import nsImg422 from '@/public/images/ns-img-422.jpg';
import { ChevronRightIcon } from '@/src/components/shared/icon';
import {
  AboutIcon,
  CaseStudyICon,
  CustomersIcon,
  ManifestoIcon,
  ServiceIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import CompanyMenuLink, { type CompanyMenuLinkProps } from './company-menu-link';

type CompanyLink = Omit<CompanyMenuLinkProps, 'onClose'>;

const aboutLinks: CompanyLink[] = [
  {
    title: 'About Us',
    description: 'Story, roots in Channelwill, and how we work',
    href: '/about',
    icon: AboutIcon,
  },
  {
    title: 'Why Choose Us',
    description: 'Depth, coverage, judgment, and client-win delivery',
    href: '/why-us',
    icon: WhyChooseUsIcon,
  },
];

const cultureLinks: CompanyLink[] = [
  {
    title: 'Our Manifesto',
    description: 'Principles for scoping, shipping, and handovers',
    href: '/manifesto',
    icon: ManifestoIcon,
  },
  {
    title: 'Customers',
    description: 'Who we engage and how projects start',
    href: '/customers',
    icon: CustomersIcon,
  },
  {
    title: 'Testimonials',
    description: 'What merchants say about our Shopify work',
    href: '/testimonials',
    icon: TestimonialIcon,
  },
  {
    title: 'Case Studies',
    description: 'Write-ups of themes, apps, and integrations',
    href: '/projects',
    icon: CaseStudyICon,
  },
];

const solutionLinks: CompanyLink[] = [
  {
    title: 'Services',
    description: 'Themes, apps, migrations, and integrations',
    href: '/services',
    icon: ServiceIcon,
  },
  {
    title: 'Use Cases',
    description: 'Problems we solve repeatedly on Shopify',
    href: '/use-cases',
    icon: UseCaseIcon,
  },
];

interface CompanyMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

const CompanyMenu = ({ menuDropdownId, setMenuDropdownId }: CompanyMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-[946px] -translate-x-1/2 bg-transparent opacity-0 transition-opacity duration-300 ease-in-out',
          menuDropdownId === 'company-mega-menu' && 'pointer-events-auto! opacity-100'
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border p-4 transition-all duration-500 ease-out md:w-[946px] md:gap-x-6 lg:flex',
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {aboutLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {cultureLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="space-y-3">
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
              ))}
            </ul>
          </div>
          <p className="text-tagline-2 p-3 font-medium text-white/60">What&apos;s new</p>
          <div>
            <Link
              href="/blog"
              onClick={handleClose}
              aria-label="Read studio updates on our blog"
              className="group/company-menu-link border-stroke-1/11 relative block overflow-hidden rounded-[14px] border"
            >
              <figure className="relative h-[166px] w-full max-w-full overflow-hidden rounded-[14px]">
                <Image
                  src={nsImg422}
                  alt=""
                  className="h-full w-full rounded-[14px] object-cover"
                />
                <div className="absolute top-3 bottom-3 left-3 w-full space-y-5 p-2">
                  <div>
                    <p className="text-tagline-1 text-background-13 font-normal">Studio updates</p>
                    <p className="text-tagline-2 text-background-13/60 w-full max-w-[200px] font-normal">
                      Shopify experiments, changelog-style posts.
                    </p>
                  </div>
                  <span className="ring-background-13/60 bg-background-13 inline-block rounded-full px-5 py-1 ring-4">
                    <span className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden">
                      <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover/company-menu-link:translate-x-6">
                        <ChevronRightIcon className="size-[18px] stroke-white stroke-[1.5px]" />
                      </span>
                      <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover/company-menu-link:translate-x-0">
                        <ChevronRightIcon className="size-[18px] stroke-white stroke-[1.5px]" />
                      </span>
                    </span>
                  </span>
                </div>
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMenu;
