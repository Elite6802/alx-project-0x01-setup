import React from 'react';

interface ButtonProps {
  title: string;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`border px-3 py-1 mt-3 bg-blue-500 text-white ${styles}`}>
      {title}
    </button>
  );
};

export default Button;