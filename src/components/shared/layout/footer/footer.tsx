import opai14 from '@/public/images/gradient/opai-14.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import BottomBar from '@/src/components/shared/layout/footer/bottom-bar';
import Divider from '@/src/components/shared/layout/footer/divider';
import Newsletter from '@/src/components/shared/layout/footer/news-letter';
import ShuffledTitle from '@/src/components/shared/layout/footer/Shuffled-title';
import { SocialIcons } from '@/src/components/shared/social-icons';
import Image from 'next/image';
import Link from 'next/link';

const defaultSocialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-background-6 relative z-20 overflow-hidden pt-10 pb-[30px] md:pt-[80px]">
      <div className="main-container relative z-10">
        {/* Newsletter */}
        <Newsletter />

        {/* Divider */}
        <Divider />

        {/* Links grid */}
        <div className="grid grid-cols-12 gap-10 lg:gap-6">
          <div className="col-span-12 lg:col-span-4">
            <RevealAnimation delay={0.1}>
              <div className="space-y-8">
                <Link href="/" className="block" aria-label="AI Clawers home">
                  <Image
                    src="/images/logo/logo-white.svg"
                    alt="AI Clawers"
                    width={166}
                    height={40}
                    className="h-[40px] w-[166px]"
                  />
                </Link>
                <div className="space-y-6">
                  <p className="text-tagline-2 text-background-11 max-w-md">
                    Intelligent Shopify help—launch, fix, and grow your store so you spend less time on the platform
                    and more on customers and sales.
                  </p>
                  <div className="border-stroke-1/11 max-w-md space-y-2 rounded-lg border border-white/10 px-4 py-3">
                    <p className="font-ibm-plex-mono text-tagline-3 font-medium tracking-wide text-white/85 uppercase">
                      AI CLAWERS SOLUTIONS LIMITED
                    </p>
                    <p lang="zh-Hans" className="text-tagline-3 font-normal text-white/65">
                      智爪集成有限公司
                    </p>
                    <p className="text-tagline-4 font-normal text-white/45">
                      Legal entity for the AI Clawers brand.
                    </p>
                    <a
                      href="mailto:contact@aiclawers.com"
                      className="text-tagline-2 inline-block font-normal text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      contact@aiclawers.com
                    </a>
                  </div>
                </div>
                {/*<div className="space-y-6">*/}
                {/*  <div>*/}
                {/*    <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Address:</p>*/}
                {/*    <p className="text-tagline-3 font-normal text-white/50">*/}
                {/*      9 Queen&apos;s Road Central, Central, Hong Kong*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*  <div>*/}
                {/*    <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Contact:</p>*/}
                {/*    <Link*/}
                {/*      href="tel:+12025550130"*/}
                {/*      className="text-tagline-3 inline-block font-normal text-white/50 transition-colors duration-300 hover:text-white hover:underline"*/}
                {/*    >*/}
                {/*      +1 (202) 555-0130*/}
                {/*    </Link>*/}
                {/*    <br />*/}
                {/*    <Link*/}
                {/*      href="mailto:will@baoea.com"*/}
                {/*      className="text-tagline-3 inline-block font-normal text-white/50 transition-colors duration-300 hover:text-white hover:underline"*/}
                {/*    >*/}
                {/*      will@baoea.com*/}
                {/*    </Link>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/* <SocialIcons links={defaultSocialLinks} /> */}
              </div>
            </RevealAnimation>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-8 lg:col-span-8">
            <div className="col-span-12 sm:col-span-4">
              <RevealAnimation delay={0.2}>
                <div className="space-y-2 text-left lg:text-right">
                  <p className="text-tagline-2 font-semibold text-white/90">Company</p>
                  <ul>
                    <li className="py-2">
                      <Link
                        href="/about"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/projects"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/blog"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <RevealAnimation delay={0.3}>
                <div className="space-y-2 text-left lg:text-right">
                  <p className="text-tagline-2 font-semibold text-white/90">Support</p>
                  <ul>
                    <li className="py-2">
                      <Link
                        href="/faq"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="https://shopify.baoea.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Shopify Tutorial
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="mailto:contact@aiclawers.com"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        contact@aiclawers.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-2 text-left lg:text-right">
                  <p className="text-tagline-2 font-semibold text-white/90">Legal Policies</p>
                  <ul>
                    <li className="py-2">
                      <Link
                        href="/terms"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/privacy"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/gdpr"
                        className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                      >
                        GDPR Compliance
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* AICLWERS title */}
        <ShuffledTitle />

        <BottomBar />
      </div>

      {/* Background gradient */}
      <RevealAnimation delay={0.4} direction="right" offset={100}>
        <figure
          className="pointer-events-none absolute -right-[37%] -bottom-[20%] z-0 h-[500px] w-[500px] select-none sm:-right-[21%] sm:-bottom-[28%] md:-bottom-[24%] lg:-right-[14%] lg:-bottom-[27%] xl:-right-[34%] xl:-bottom-[94%] xl:h-[1600px] xl:w-[1600px]"
          aria-hidden
        >
          <Image
            src={opai14}
            alt="gradient background"
            width={1600}
            height={1600}
            className="h-full w-full object-contain"
          />
        </figure>
      </RevealAnimation>
    </footer>
  );
};

export default Footer;
