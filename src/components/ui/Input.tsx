import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helpText?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, size = 'md', type = 'text', className, id, required, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined
          }
          className={cn(
            'block w-full rounded-md border border-gray-300 bg-white text-slate-950 shadow-sm placeholder:text-slate-400',
            'transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            'read-only:bg-gray-50',
            sizeStyles[size],
            hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
            className
          )}
          required={required}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={`${inputId}-help`} className="mt-1 text-sm text-gray-500">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
