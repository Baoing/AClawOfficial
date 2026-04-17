import Signup from '@/src/components/auth/signup';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Sign up - AI Solutions || AI Clawers',
  description:
    'Create your AI Clawers account. Join and explore AI-driven solutions tailored to your goals.',
};

const page = () => {
  return <Signup />;
};

export default page;
