'use client';

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card';
import { shopifyCommonQuestionsFaqSection } from '@/src/data/faq-data';

type ShopifyCommonFaqProps = {
  isFirst?: boolean;
  titleDelay?: number;
};

const ShopifyCommonFaq = ({ isFirst = true, titleDelay = 0 }: ShopifyCommonFaqProps) => {
  return (
    <FaqSectionCard
      section={shopifyCommonQuestionsFaqSection}
      isFirst={isFirst}
      titleDelay={titleDelay}
    />
  );
};

export default ShopifyCommonFaq;
