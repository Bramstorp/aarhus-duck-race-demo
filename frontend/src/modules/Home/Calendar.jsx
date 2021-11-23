import React from "react";
import "./Calendar.style.css";

export const Calendar = () => {
  return (
    <>
      <div className="calendar-countdown flex-fill">
        <div className="calendar-top">
          <h1 className="calendar-title">DATO PLACEHOLDER</h1>
        </div>
        <div className="d-flex bg-color calendar-items">
          <div className="flex-fill calendar-item">
            <p className="countdown m-0">5</p>
            <p className="time">Test</p>
          </div>
          <div className="flex-fill calendar-item">
            <p className="countdown m-0">20</p>
            <p className="time">Test</p>
          </div>
          <div className="flex-fill calendar-item">
            <p className="countdown m-0">10</p>
            <p className="time">Test</p>
          </div>
        </div>
      </div>
    </>
  );
};
