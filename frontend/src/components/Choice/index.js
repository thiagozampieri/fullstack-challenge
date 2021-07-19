import React from 'react';
import { Radio as RadioWrapper } from 'antd';
import Icon from '../Icon';
import Typography from '../Typography';

import './Choice.less';

export default function Choice({ size, color, onChange, value, options }) {
  return (
    <RadioWrapper.Group
      onChange={(event) => onChange(event.target.value)}
      defaultValue={value}
      className="corelab-choice"
    >
      {options?.map(({ name, value, icon }) => (
        <RadioWrapper.Button value={value} key={value}>
          <Icon size={size} type={icon} />
          <Typography type="h6" color={color}>{name}</Typography>
        </RadioWrapper.Button>
      ))}
    </RadioWrapper.Group>
  );
}