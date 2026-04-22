import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import FaqContact from '@/src/components/home/faq-contact';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
} from '@/src/components/shared/ui/accordion';

const faqData = [
  {
    value: 'item-one',
    question: 'What platform do you suggest for my store?',
    answer:
      'For an online store that feels intuitive and ships with strong ecommerce features out of the box, we usually recommend Shopify. It scales from small brands to larger catalogs, and it connects cleanly with the marketing, fulfillment, and analytics tools teams already use—so you can add capabilities over time without rebuilding from scratch.',
  },
  {
    value: 'item-two',
    question: 'Will my Shopify store be mobile friendly?',
    answer:
      'Yes. We treat responsive layout as a default, not an add-on. Your storefront should read well and feel easy to tap through on phones and tablets, because that is where most shoppers browse—and where small friction points quietly cost conversions.',
  },
  {
    value: 'item-three',
    question: 'Will I be able to edit my store easily?',
    answer:
      'We design builds so day-to-day updates stay inside Shopify admin whenever possible—products, collections, pages, and basic content blocks your team can own. We also walk you through the moving parts that are safer to touch with a checklist, and we stay available when you want help with bigger changes or seasonal launches.',
  },
  {
    value: 'item-four',
    question: 'What SEO basics will you incorporate?',
    answer:
      'We treat SEO as part of a healthy launch, not a mystery bolt-on. That typically includes clear titles and descriptions, clean URL structure, fast-loading theme patterns where we control them, structured data where it helps, and sensible internal linking. If you want to go further with content or off-site visibility, we can scope that separately once the storefront foundation is solid.',
  },
  {
    value: 'item-five',
    question: 'How much do your services cost?',
    answer:
      'Pricing depends on what you need—new build, redesign, migration, apps, or ongoing care. Share your goals and timeline and we will reply with a tailored quote and a sensible phased plan, so you are not paying for work you do not need yet.',
  },
  {
    value: 'item-six',
    question: 'Do you provide ongoing support after the project is completed?',
    answer:
      'Yes. Many teams want a light maintenance window after launch for fixes, app updates, and small improvements. We can also set up a simple support rhythm—think seasonal releases, checkout tweaks, or performance checks—so your site keeps feeling sharp after go-live.',
  },
  {
    value: 'item-seven',
    question: 'How long does it take to complete a Shopify website?',
    answer:
      'Timelines track complexity: a focused refresh can be weeks, while a full redesign, migration, or app-heavy build usually needs more runway. We agree milestones up front and keep communication tight, so you always know what is shipping next and why.',
  },
];

const FAQ = () => {
  return (
    <section className="bg-background-6 py-10 md:py-28 lg:py-30 xl:py-40 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-19.5">
        <div className="space-y-1.5 text-center md:space-y-3">
          <TextReveal>
            <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 max-md:-leading-[110%] mx-auto max-w-[700px] font-normal">
              <span className="font-normal text-white/90"> Shopify questions, </span>
              <span className="text-white/30"> answered </span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-[380px] text-white/60">
              Straight answers on Shopify, timelines, and what it is like to work with us—before you reach out.
            </p>
          </TextReveal>
        </div>

        <div className="flex flex-col items-start justify-between gap-y-10 overflow-hidden md:items-center lg:flex-row lg:items-start lg:gap-x-10 xl:gap-x-[100px]">
          <RevealAnimation direction="left" offset={100} delay={0.3}>
            <div className="w-full max-w-[595px]">
              <Accordion defaultOpen="item-one" type="single">
                {faqData.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border-stroke-1/10 rounded-lg border px-6"
                  >
                    <AccordionAction>{item.question}</AccordionAction>
                    <AccordionContent contentClassName="font-inter-tight text-tagline-2 max-w-[531px] cursor-text pb-6 font-extralight text-white/50">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>

          <FaqContact />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
