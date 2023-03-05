import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from "../api/axiosBackendConfig";

const GenerateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const validateDatesPicked = () => {
    if (startDate >= endDate) {
      console.error("Error: Start date must be before end date.");
      return false;
    } else {
      return true;
    }
  };

  const handleGenerate = () => {
    if (validateDatesPicked()) {
      const start = startDate.toISOString();
      const end = endDate.toISOString();

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
          if (response.status === 201) {
            console.log(response.data);
          } else if (response.status === 409) {
            console.log(response.data);
          } else {
            console.error(
              `Error: Unexpected response status code: ${response.status}`
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div>
        <center>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <button onClick={handleGenerate}>Generate Calendar</button>
        </center>
      </div>
    </>
  );
};

export default GenerateCalendar;
