import Login from '@/src/components/auth/login';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Login - AI Solutions || AIClawers',
  description:
    'Sign in to your AIClawers account. Access AI-driven solutions and manage your projects.',
};

const page = () => {
  return <Login />;
};

export default page;
