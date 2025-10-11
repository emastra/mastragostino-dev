'use client';
import React, { useEffect, ReactNode } from 'react';

// from lovable *************************************************************
import { cn } from '~/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

// *********************************************************************

let stylesInjected = false;

const injectGlobalStyles = () => {
  if (stylesInjected) return;
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes move-gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
};

interface GradientProps {
  children: ReactNode;
  className?: string;
}

const GradientCard = ({ children, className = '' }: GradientProps) => {
  useEffect(() => {
    injectGlobalStyles();
  }, []);

  return (
    <div className={`group relative ${className}`}>
      <div
        className="absolute -inset-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 opacity-75 blur-2xl transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
        style={{
          backgroundSize: '200% 200%',
          animation: 'move-gradient 4s ease-in-out infinite',
        }}
      ></div>

      <div
        className="relative rounded-xl bg-white/90 p-0.5 transition-all duration-500 dark:bg-black-600/90"
        style={{
          backgroundSize: '200% 200%',
          animation: 'move-gradient 4s ease-in-out infinite',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientCard;
