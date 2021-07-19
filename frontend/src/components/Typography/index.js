import React from 'react';
import { Typography as TypographyWrapper } from 'antd';

import './Typography.less';

const { Text } = TypographyWrapper;

export default function Typography({ type, color, children, strong, alignText, ...props }) {
  const textColor = `text-${color || 'default'}`;
  const typeWrapper = `corelab-text__${type || 'h10'}`;
  const align = `text-${alignText || 'left'}`;
  return (
    <Text
      {...props}
      strong={strong}
      className={['corelab-text', typeWrapper, textColor, align]}
    >
      {children}
    </Text>
  );
}