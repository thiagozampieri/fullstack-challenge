import React from 'react';
import { Checkbox as CheckboxWrapper } from 'antd';

import './CheckboxGroup.less';

export default function CheckboxGroup({ size, onChange, value, options }) {
  return (
    <CheckboxWrapper.Group
      size={size}
      onChange={(val) => onChange(val)}
      defaultValue={value}
      className="corelab-checkbox__group"
      options={options?.map(({ name, value }) => ({ label: name, value }))}
    />
  );
}