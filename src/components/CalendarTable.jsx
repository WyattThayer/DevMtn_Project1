import { useState } from "react";
import axios from "axios";
import DaysTableHeader from "./DaysTableHeader";
import DateRows from "./DateRows";
import "./CalendarTable.css"

const CalendarTable = () => {
  return (
    <div>
        <div>MONTH</div>
      <table>
        <thead>
          <DaysTableHeader/>
        </thead>
        <tbody>
          <DateRows/>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable