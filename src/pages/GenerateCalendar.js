import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from "../api/axiosBackendConfig";

const GenerateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const validateDatesPicked = () => {
    console.log("validate check");
  };

  const handleGenerate = () => {
    validateDatesPicked();

    const start = startDate.toISOString(); // convert to Unix timestamp
    const end = endDate.toISOString(); // convert to Unix timestamp

    console.log(start);
    console.log(end);

    api
      .post(
        "/scan",
        {},
        {
          params: {
            start: start,
            end: end,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="headerText">
        <h1>PlanIt</h1>
      </div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        <button onClick={handleGenerate}>Generate Calendar</button>
      </div>
    </>
  );
};

export default GenerateCalendar;
