import "./App.css";
import { Rental } from "./Rental.1";
import { data } from "./Data";
import { useFormik } from "formik";
import * as yup from "yup";
import { Switch, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TextField from "@mui/material/TextField";
import DateMomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/rental/order">
          <Calendar />
        </Route>
        <Route path="/rental">
          <div className="rental-card">
            {data.map((data) => (
              <Rental
                name={data.name}
                image={data.image}
                price={data.price}
                timing={data.timing}
              />
            ))}
          </div>
        </Route>
        <Route path="/">
          <Loginform />
        </Route>
      </Switch>
    </div>
  );
}

const formValidationSchema = yup.object({
  email: yup.string().min(5, "Need a longer email").required("fill the email"),

  password: yup
    .string()
    .required("fill the password")
    .min(8, "Need a longer password")
    .max(12, "Too much password"),
});

function Loginform() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onsubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        value={formik.values.email}
        id="outlined-basic-email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="outlined"
        size="small"
        label="email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

      <TextField
        value={formik.values.password}
        type="password"
        id="outlined-basic-password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        minLength="8"
        variant="outlined"
        size="small"
        label="password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}

      <Button
        variant="contained"
        onClick={() => history.goForward(`/rental`)}
        aria-label="toggle descreption"
      >
        Login
      </Button>
    </form>
  );
}

function Calendar() {
  const [currentDate, setCurrentData] = useState(new Date());
  return (
    <div className="datetime">
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <DateTimePicker value={currentDate} onChange={setCurrentData} />
      </MuiPickersUtilsProvider>
    </div>
  );
}
