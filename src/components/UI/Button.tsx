import React from 'react';

export function Button({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button className='button' {...props}>
      {children}
    </button>
  );
}
