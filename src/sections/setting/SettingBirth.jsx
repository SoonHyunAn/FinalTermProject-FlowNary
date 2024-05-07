// 기본
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";

// css 연결
import './setting.css';

// 생년월일
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SettingBirth(props) {
  const [birth, setBirth] = useState(props.birth);

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.birth !== '') {
        setBirth(props.birth);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [props.birth]);

  const handleBirth = (e) => {
    setBirth(dayjs(e));
    props.onBirthChange(e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker sx={{ mt: 2, width: '100%' }} label="생년월일" onChange={handleBirth} slots={{ textField: TextField }}
          value={dayjs(birth)} formatDensity="spacious" />
      </DemoContainer>
    </LocalizationProvider>
  );

}