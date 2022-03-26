import DateMomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { useState } from "react";

export function Calendar() {
  const [currentDate, setCurrentData] = useState(new Date());
  return (
    <div className="datetime">
      <div>
        <h3>
          From-Date
          <br />
          <br />
        </h3>
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DateTimePicker value={currentDate} onChange={setCurrentData} />
        </MuiPickersUtilsProvider>
      </div>
      <div>
        <h3>
          TO-Date
          <br />
          <br />
        </h3>

        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DateTimePicker value={currentDate} onChange={setCurrentData} />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}
