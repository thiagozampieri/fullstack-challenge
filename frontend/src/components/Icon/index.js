import React from 'react';
import { 
  CheckOutlined, 
  MinusCircleOutlined,
  MinusOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
  RightOutlined,
  PlusCircleOutlined,
  CloseOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import './Icon.less';

const COMPONENT = {
  'minus-circle': MinusCircleOutlined,
  'plus-circle': PlusCircleOutlined,
  'arrow-left': ArrowLeftOutlined,
  'chevron-right': RightOutlined,
  'contacts': ContactsOutlined,
  check: CheckOutlined,
  minus: MinusOutlined,
  plus: PlusOutlined, 
  error: CloseOutlined, 
};
const SIZE = {
  small: 24,
  default: 32,
  large: 40,
}

export default function Icon({ size, type, color, dimensionDefault, ...props }) {
  const Component = COMPONENT[type];
  const dimension = SIZE[size];
  const textColor = `text-${color || 'default'}`;
  if (!Component) return null;
  
  return (
    <Component className={textColor} style={{ fontSize: dimension, ...props.style }} />
  );
}