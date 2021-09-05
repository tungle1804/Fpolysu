import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const CustomerDatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6">
          <label style={{ fontWeight: "bold" }}>Start:</label>
          <DatePicker
            className="border border-info text-sm-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="col-6">
          <label style={{ fontWeight: "bold" }}>End:</label>
          <DatePicker
            className="border border-info text-sm-center"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: "monospace",
          fontWeight: "lighter",
          color: "orangered",
          alignContent: "center",
        }}
      >
        <br />
        {startDate && endDate && (
          <div className="summary">
            <p
              style={{
                fontFamily: "monospace",
                fontWeight: "lighter",
                color: "orangered",
                alignContent: "center",
              }}
            >
              Thống kê từ ngày {moment(startDate).format("l")} đến
              ngày {moment(endDate).format("l")}.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default CustomerDatePicker;
