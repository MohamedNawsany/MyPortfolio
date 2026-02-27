import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgColor?: 'white' | 'gray';
}

export const SectionContainer = ({ 
  children, 
  id, 
  className = '',
  bgColor = 'white',
}: SectionContainerProps) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
  };

  return (
    <section 
      id={id} 
      className={`py-20 ${bgClasses[bgColor]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
