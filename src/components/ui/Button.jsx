import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-red-300 text-white hover:bg-red-400',
    secondary: 'bg-primary-light text-white hover:bg-primary',
    outline: 'border border-primary text-red-400 hover:bg-primary hover:text-pink-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
