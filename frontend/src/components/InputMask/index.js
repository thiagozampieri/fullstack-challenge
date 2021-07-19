import React from 'react';
import { Input as InputWrapper } from 'antd';
import MaskedInput from 'react-text-mask';
import Typography from '../Typography';

import './InputMask.less';

export default function InputMask({ size, disabled, onChange, value, placeholder, mask }) {
  return (
    <div className="corelab-inputmask">
      <Typography type="h9">{placeholder}</Typography>
      <MaskedInput
        guide={true}
        mask={mask}
        showMask={true}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        render={(ref, props) => (
          <InputWrapper
            allowClear
            ref={input => ref(input && input.input)}
            {...props}
            onBlur={(event) => {
              props.onChange(event.target.value)
              onChange(event.target.value)
            }}
            onChange={(event) => {
              props.onChange(event.target.value)
              onChange(event.target.value)
            }}
          />
        )}
      />
    </div>
  );
}