import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Heading = ({ 
  children, 
  variant = 'h2', 
  className = '',
  as,
}: TypographyProps) => {
  const Component = as || variant;
  
  const variantClasses = {
    h1: 'text-4xl md:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-semibold',
    h6: 'text-base font-semibold',
  };

  return (
    <Component className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export const Paragraph = ({ 
  children, 
  className = '',
  as = 'p',
}: TypographyProps) => {
  const Component = as;
  
  return (
    <Component className={`text-lg text-gray-600 ${className}`}>
      {children}
    </Component>
  );
};

export const Label = ({ 
  children, 
  className = '',
  htmlFor,
}: { children: ReactNode; className?: string; htmlFor?: string }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  );
};
