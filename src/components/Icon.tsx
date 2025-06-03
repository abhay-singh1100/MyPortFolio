import React from 'react';
import { IconType, IconContext, IconBaseProps } from 'react-icons';

interface IconProps extends IconBaseProps {
  icon: IconType;
}

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  return (
    <IconContext.Provider value={{ className: props.className || 'react-icons' }}>
      {React.createElement(icon as React.JSXElementConstructor<any>, props)}
    </IconContext.Provider>
  );
};

export default Icon; 