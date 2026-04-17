import Signup from '@/src/components/auth/signup';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Sign up - AI Solutions || AIClawers',
  description:
    'Create your AIClawers account. Join and explore AI-driven solutions tailored to your goals.',
};

const page = () => {
  return <Signup />;
};

export default page;
