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
    question: 'What Shopify work do you take on?',
    answer:
      'We help merchants and brands with Online Store 2.0 themes, performance and Core Web Vitals, checkout and cart UX, metafields and content modeling, Shopify Flow and admin automation, public and custom apps, integrations (ERP, CRM, 3PL), and data reporting. We scope each engagement around your catalog, markets, and launch goals—not generic “AI packages.”',
  },
  {
    value: 'item-two',
    question: 'How long does a typical Shopify project take?',
    answer:
      'It depends on scope. A focused theme tune-up, speed pass, or Flow build can ship in a few weeks. A new storefront, migration, or app-heavy build usually runs several weeks to a few months. We start with discovery on catalog structure, apps, markets, and checkout constraints so timelines and milestones match reality.',
  },
  {
    value: 'item-three',
    question: 'How do you handle data, apps, and compliance on Shopify?',
    answer:
      'We follow least-privilege app installs, document which apps and scopes touch customer data, and align tracking and marketing consent with your policies. For GDPR-style programs we map PII flows across Shopify, storefront, and connected tools. Work can stay in your org and collaborators where you prefer—we do not need open-ended exports of your order data to deliver storefront work.',
  },
  {
    value: 'item-four',
    question: 'Can you work with our live store or migrate us to Shopify?',
    answer:
      'Yes. We often work on production stores with staged themes, duplicate environments, and clear QA checklists. For migrations we plan redirects, handle collection and URL structure, reconcile metafields, and test checkout, taxes, and shipping before cutover. ERP and fulfillment integrations are scoped early so launch week stays boring—in a good way.',
  },
  {
    value: 'item-five',
    question: 'What results should we expect from a rebuild or optimization?',
    answer:
      'We tie work to metrics you already care about: conversion rate, mobile speed, average order value, support ticket volume, and operational time saved in admin. Theme and performance work targets measurable storefront gains; Flow and better data modeling reduce manual work. We agree on KPIs before build and review them after launch.',
  },
  {
    value: 'item-six',
    question: 'Do you build custom themes and apps, or only configure existing ones?',
    answer:
      'Both. We use quality themes, apps, and Shopify-native features whenever they fit your roadmap. When you need something only your business does—custom sections, checkout UI extensions, private apps, or middleware—we design and ship that too. Most projects mix configuration, light custom Liquid or app code, and clear documentation so your team can own the store afterward.',
  },
  {
    value: 'item-seven',
    question: 'What happens after launch—do you offer ongoing support?',
    answer:
      'We hand over theme notes, app list, and runbooks for campaigns and catalog updates. Many clients keep us on a light retainer for seasonal releases, A/B follow-ups, new markets, and app upgrades. We can also train your staff on Flow, metafields, and safe theme editing so day-to-day changes do not depend on a single vendor.',
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
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-[340px] text-white/60">
              Themes, apps, migrations, and how we ship—before you book a call.
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
