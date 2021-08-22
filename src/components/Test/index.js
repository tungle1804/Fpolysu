import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
export default function Test() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="flex-auto"
        selected={date}
        onChange={(date) => setDate(date)} //when day is clicked
        // onChange={handleDateChange} //only when value has changed
      />
    </div>
  );
}
