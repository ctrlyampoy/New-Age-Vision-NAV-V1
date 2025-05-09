import React from 'react';
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-md transition duration-300 inline-flex items-center justify-center';
  const variants = {
    primary: 'bg-purple-700 hover:bg-purple-800 text-white',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-white',
    outline: 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-50',
    outlineGold: 'bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50',
    ghost: 'bg-transparent hover:bg-purple-50 text-purple-700'
  };
  const sizes = {
    small: 'text-sm px-3 py-1',
    medium: 'px-4 py-2',
    large: 'text-lg px-6 py-3'
  };
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  return <button className={classes} {...props}>
      {children}
    </button>;
};
export default Button;