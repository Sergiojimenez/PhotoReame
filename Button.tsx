import React from 'react';

type ButtonProps = {
  variant?: 'filled' | 'outlined' | 'text';
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'inverted';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'm',
  color = 'primary',
  children,
  className = '',
  ...props
}) => {
  // Base styles for all buttons
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgb(var(--color-focus))] focus-visible:ring-offset-[rgb(var(--color-surface-base))] disabled:cursor-not-allowed transform';

  // Size-specific styles
  const sizeClasses = {
    s: 'h-[32px] min-w-[88px] px-[12px] rounded-[var(--radius-s)] gap-[8px] text-sm',
    m: 'h-[40px] min-w-[96px] px-[16px] rounded-[var(--radius-m)] gap-[8px] text-base',
    l: 'h-[48px] min-w-[112px] px-[20px] rounded-[var(--radius-l)] gap-[12px] text-lg',
  };

  // Color mapping for filled variant
  const filledColorClasses = {
    primary: 'bg-[rgb(var(--color-brand-primary))] text-[rgb(var(--color-text-on-brand))] hover:bg-[rgb(var(--color-brand-primary-hover))] active:bg-[rgb(var(--color-brand-primary-active))] disabled:bg-[rgba(var(--color-text-disabled),0.5)] disabled:text-[rgb(var(--color-text-primary))]',
    success: 'bg-[rgb(var(--color-success))] text-white hover:opacity-90 disabled:bg-[rgba(var(--color-text-disabled),0.5)]',
    warning: 'bg-[rgb(var(--color-warning))] text-white hover:opacity-90 disabled:bg-[rgba(var(--color-text-disabled),0.5)]',
    danger: 'bg-[rgb(var(--color-danger))] text-white hover:opacity-90 disabled:bg-[rgba(var(--color-text-disabled),0.5)]',
    info: 'bg-[rgb(var(--color-info))] text-white hover:opacity-90 disabled:bg-[rgba(var(--color-text-disabled),0.5)]',
    neutral: '', // Not applicable for filled
    inverted: '', // Not applicable for filled
  };
  
  // Color mapping for text variant
  const textColorClasses = {
    primary: 'text-[rgb(var(--color-brand-primary))] hover:bg-[rgba(var(--color-brand-primary),0.1)]',
    neutral: 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))] hover:bg-white/5',
    inverted: 'text-gray-600 hover:text-gray-900 hover:bg-black/10',
    success: 'text-[rgb(var(--color-success))] hover:bg-[rgba(var(--color-success),0.1)]',
    warning: 'text-[rgb(var(--color-warning))] hover:bg-[rgba(var(--color-warning),0.1)]',
    danger: 'text-[rgb(var(--color-danger))] hover:bg-[rgba(var(--color-danger),0.1)]',
    info: 'text-[rgb(var(--color-info))] hover:bg-[rgba(var(--color-info),0.1)]',
  }

  // Variant-specific styles
  const variantClasses = {
    filled: `${filledColorClasses[color]} shadow-lg hover:shadow-xl hover:shadow-[rgb(var(--color-brand-primary),0.3)] hover:-translate-y-px`,
    outlined: 'border-2 border-[rgb(var(--color-border-interactive))] bg-transparent text-[rgb(var(--color-text-secondary))] hover:bg-white/10 hover:text-[rgb(var(--color-text-primary))] hover:border-[rgb(var(--color-text-secondary))] disabled:border-[rgb(var(--color-border-subtle))] disabled:text-[rgb(var(--color-text-disabled))] disabled:bg-transparent hover:-translate-y-px',
    text: `bg-transparent ${textColorClasses[color]} disabled:text-[rgb(var(--color-text-disabled))] disabled:bg-transparent`,
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
