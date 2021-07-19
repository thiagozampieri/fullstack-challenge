import React, { useMemo, useState } from 'react';
import { Row, Col } from 'antd';
import numeral from 'numeral';
import IconButton from '../IconButton';
import Typography from '../Typography';

import './Volume.less';

export default function Volume({ size, disabled, onChange, value, placeholder, step = 1 }) {
  const [data, setData] = useState({ value });

  const increment = () => {
    const { value: newValue } = data;
    handleChange({ ...data, value: newValue + parseInt(step, 10) });
  }

  const decrement = () => {
    const { value } = data;
    const newValue = value - parseInt(step, 10);
    const volume = (newValue <= 0) ? 1 : newValue;
    handleChange({ ...data, value: volume });
  }

  const handleChange = (newData) => {
    setData(newData);
    onChange(newData);
  }
  
  const decrementDisabled = useMemo(() => {
    if (disabled || data?.value <= 0)return true;
  }, [disabled, data?.value])

  return (
    <div className="corelab-volume">
      <Row>
        <Col span={3}>
          <IconButton
            key="minus-circle"
            type="link"
            disabled={decrementDisabled}
            onClick={decrement}
            size={size}
            icon="minus-circle"
          />
        </Col>
        <Col span={18}>
          <Typography
            type="h10"
            color="secondary"
            alignText="center"
          >
            {placeholder}
          </Typography>
          <Typography
            type="h6"
            alignText="center"
          >
            {numeral(data?.value || 0.00).format('$ 0,0.00')}
          </Typography>
        </Col>
        <Col span={3}>
          <IconButton
            key="plus-circle"
            type="link"
            disabled={disabled}
            onClick={increment}
            size={size}
            icon="plus-circle"
          />
        </Col>
      </Row>      
    </div>
  );
}