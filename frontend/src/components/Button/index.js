import React from 'react';
import { Button as ButtonWrapper } from 'antd';

import './Button.less';

export default function Button({ children, color, ...props }) {
  const colorButton = `btn-${color || 'default'}`;
  return (
    <ButtonWrapper
      className={["corelab-button", colorButton]}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}