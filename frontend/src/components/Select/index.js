import React from 'react';
import { Select as SelectWrapper } from 'antd';
import Typography from '../Typography';

import './Select.less';

const { Option } = SelectWrapper;

export default function Select({ size, disabled, onChange, value, options, placeholder }) {
  return (
    <div className="corelab-select">
      <Typography type="h9">{placeholder}</Typography>
      <SelectWrapper
        showSearch
        allowClear
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={(value) => onChange(value)}
        defaultValue={value}
        dropdownClassName="corelab-dropdown"
        filterOption={(input, { props }) =>
          props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {options?.map(({ name, value }) => (
          <Option key={value} value={value}>{name}</Option>
        ))}
      </SelectWrapper>
    </div>
  );
}