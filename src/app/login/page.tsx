import Login from '@/src/components/auth/login';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Login - AI Solutions || AI Clawers',
  description:
    'Sign in to your AI Clawers account. Access AI-driven solutions and manage your projects.',
};

const page = () => {
  return <Login />;
};

export default page;
