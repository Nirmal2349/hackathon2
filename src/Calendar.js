import DateMomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { useState } from "react";

export function Calendar() {
  const [currentDate, setCurrentData] = useState(new Date());
  return (
    <div className="datetime">
      <div>
        From-Date
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DateTimePicker value={currentDate} onChange={setCurrentData} />
        </MuiPickersUtilsProvider>
      </div>
      <div>
        TO-Date
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DateTimePicker value={currentDate} onChange={setCurrentData} />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}
