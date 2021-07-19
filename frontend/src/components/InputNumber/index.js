import React, { useMemo, useState } from 'react';
import { Button, Input as InputWrapper } from 'antd';
import Icon from '../Icon';
import Typography from '../Typography';
import { isNil } from 'lodash';

import './InputNumber.less';

export default function InputNumber({ icon, size, disabled, onChange, onChangeWithoutEffect, value, count, placeholder }) {
  const IconItem = icon && <Icon type={icon} />;

  const [data, setData] = useState({ value, count });

  const increment = () => {
    const { count: newCount } = data;
    handleChange({ ...data, count: newCount + 1 });
  }

  const decrement = () => {
    const { count: newCount } = data;
    const counter = (newCount <= 0) ? 1 : newCount;
    handleChange({ ...data, count: counter - 1 });
  }

  const handleChange = (newData) => {
    setData(newData);
    onChange(newData);
  }

  const add = () => {
    // CHECK name options and choice icon
    handleChange({ ...data, count: 0 });
  }

  const decrementDisabled = useMemo(() => {
    if (disabled || data?.count <= 0)return true;
  }, [disabled, data?.count])

  const addOnAfter = useMemo(() => (data?.value && !isNil(data?.count) ? [
    <Button
      key="minus"
      type="link"
      disabled={decrementDisabled}
      onClick={decrement}
      className="corelab-button-element"
    >
      <Icon type="minus" />
    </Button>,
    <InputWrapper
      key="input"
      disabled={disabled}
      onChange={(event) => handleChange({ ...data, count: event.target.value })}
      value={data?.count}
    />,
    <Button
      key="plus"
      type="link"
      disabled={disabled}
      onClick={increment}
    >
      <Icon type="plus" />
    </Button>,
  ] : (
    <Button
      key="add"
      type="link"
      disabled={disabled}
      onClick={add}
    >
      <Typography type="h10" color="primary">ADICIONAR</Typography>
    </Button>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  )), [disabled, data])

  return (
    <div className="corelab-inputnumber">
      <InputWrapper
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        onChange={(event) => onChangeWithoutEffect({ ...data, value: event.target.value })}
        defaultValue={data?.value}
        className="corelab-inputnumber-item"
        addonBefore={IconItem}
        addonAfter={addOnAfter}
      />
    </div>
  );
}