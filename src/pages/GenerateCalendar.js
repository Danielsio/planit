import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from "../api/axiosBackendConfig";

const GenerateCalendar = () => {
  const options = { timeZone: "Asia/Jerusalem" };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const validateDatesPicked = () => {
    console.log("validate check");
  };

  const handleGenerate = () => {
    validateDatesPicked();

    const isoStartDate = new Date(
      startDate.toLocaleString("en-US", options)
    ).toISOString();

    const isoEndDate = new Date(
      endDate.toLocaleString("en-US", options)
    ).toISOString();

    console.log(isoStartDate);
    console.log(isoEndDate);

    // api
    //   .post(
    //     "/scan",
    //     {},
    //     {
    //       params: {
    //         start: startDate,
    //         end: endDate,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
          dateFormat="MM/dd/yyyy"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="MM/dd/yyyy"
        />
        <button onClick={handleGenerate}>Generate Calendar</button>
      </div>
    </>
  );
};

export default GenerateCalendar;
