import React from 'react';
import { IconContext } from 'react-icons';

interface IconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      {children}
    </IconContext.Provider>
  );
};

export default IconWrapper; 