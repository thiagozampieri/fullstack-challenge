import React from 'react';
import { Radio as RadioWrapper } from 'antd';
import Typography from '../Typography';

import './RadioGroup.less';

const radioStyle = {
  display: 'block',
  textAlign: 'initial'
};

export default function RadioGroup({ size, color, onChange, value, options }) {
  return (
    <RadioWrapper.Group
      size={size}
      onChange={(event) => onChange(event.target.value)}
      defaultValue={value}
      className="corelab-radio__group"
    >
      {options?.map(({ name, value }) => (
        <RadioWrapper style={radioStyle} value={value} key={value}>
          <Typography type="h10" color={color}>{name}</Typography>
        </RadioWrapper>
      ))}
    </RadioWrapper.Group>
  );
}