import React from 'react';
import { Card as CardWrapper } from 'antd';

import './Card.less';

export default function Card({ width, children, ...props }) {
  return (
    <CardWrapper {...props} bordered={false} style={{ width }} className="corelab-card">
      {children}
    </CardWrapper>
  );
}