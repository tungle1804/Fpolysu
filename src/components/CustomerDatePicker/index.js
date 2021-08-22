import React, { useState } from "react";
import DatePicker from "react-datepicker";
const CustomerDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date("2021/09/01"));
  const [endDate, setEndDate] = useState(new Date("2021/09/02"));
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};
export default CustomerDatePicker;
