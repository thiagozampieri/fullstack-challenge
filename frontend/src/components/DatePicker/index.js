import React from 'react';
import { DatePicker as DatePickerWrapper } from 'antd';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/pt_BR';
import Typography from '../Typography';

import './DatePicker.less';

export default function DatePicker({ size, disabled, onChange, value, placeholder }) {
  return (
    <div className="corelab-datepicker">
      <Typography type="h9">{placeholder}</Typography>
      <DatePickerWrapper
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        onChange={(value) => onChange(value)}
        defaultValue={moment(value)}
        locale={locale}
        format={'DD/MM/YYYY'}
      />
    </div>
  );
}