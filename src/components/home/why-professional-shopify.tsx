import { TextReveal } from '@/src/components/animation/text-reveal-animation';

const WhyProfessionalShopify = () => {
  return (
    <section
      className="bg-background-6 border-stroke-1/10 border-b py-12 md:py-16 lg:py-20"
      aria-labelledby="why-professional-shopify-heading"
      data-section="why-professional-shopify"
    >
      <div className="main-container">
        <div className="mx-auto max-w-[720px] space-y-4 text-center md:space-y-5">
          <TextReveal>
            <h2
              id="why-professional-shopify-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 max-md:-leading-[110%] font-normal"
            >
              <span className="text-white/90">Why do you need </span>
              <span className="text-white/30">professional Shopify development?</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.15}>
            <p className="font-inter-tight text-tagline-2 text-white/60 font-normal">
              We specialize in creating custom Shopify stores that not only captivate your audience
              but also drive sales and growth. Our focus is on crafting Shopify solutions that stand
              out in the market, ensuring they align with your business goals while delivering an
              unparalleled shopping experience.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyProfessionalShopify;
