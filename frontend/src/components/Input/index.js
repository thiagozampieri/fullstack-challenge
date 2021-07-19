import React from 'react';
import { Input as InputWrapper } from 'antd';
import Typography from '../Typography';

import './Input.less';

export default function Input({ size, disabled, onChange, value, placeholder }) {
  return (
    <div className="corelab-input">
      <Typography type="h9">{placeholder}</Typography>
      <InputWrapper
        allowClear
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        defaultValue={value}
      />
    </div>
  );
}