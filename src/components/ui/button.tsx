import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-body-sm font-semibold transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-glow hover:opacity-95 active:scale-[0.98]',
        secondary:
          'bg-dark-100 dark:bg-dark-800 text-dark-900 dark:text-dark-50 border border-dark-200 dark:border-dark-700 hover:bg-dark-200 dark:hover:bg-dark-700',
        outline:
          'border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950',
        ghost:
          'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800',
        link:
          'text-purple-600 dark:text-purple-400 underline-offset-4 hover:underline',
        white:
          'bg-white text-dark-900 shadow-md hover:bg-dark-50 dark:bg-dark-800 dark:text-dark-50 dark:hover:bg-dark-700',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-body-sm',
        lg: 'h-12 px-8 text-body-md',
        xl: 'h-14 px-10 text-body-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
