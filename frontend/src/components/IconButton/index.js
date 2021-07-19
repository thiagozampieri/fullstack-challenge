import React from 'react';
import ButtonWrapper from '../Button';
import Icon from '../Icon';

import './IconButton.less';

const SIZE = {
  small: 24,
  default: 32,
  large: 40,
}

export default function IconButton({ size, icon, color, ...props }) {
  const dimension = SIZE[size] || 14;
  const textColor = `text-${color}`;

  return (
    <ButtonWrapper
      type="ghost"
      size={size}
      color={color}
      className="corelab-icon__button"
      {...props}
    >
      <Icon className={textColor} type={icon} style={{ fontSize: dimension }} />
    </ButtonWrapper>
  );
}