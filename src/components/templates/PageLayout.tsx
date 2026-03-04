import { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
