import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import RegComponent from "./components/regComponent";
import Trow from "./components/Trow";
import "./App.css";

let schema = yup.object().shape({
  name: yup.string().required().min(2),
  Phone: yup.number().positive().integer(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const App = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <h1>User Details</h1>
      <Formik
        initialValues={{ name: "", phone: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          for (let i = 0; i <= data.length; i++) {
            if (data[i]?.phone === values.phone) {
              alert("phone number alredy existed");
              return;
            }
          }
          setData([...data, values]);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 400);
        }}
      >
        <Form>
          <Field name="name" placeholder="Name" type="text" />
          <ErrorMessage name="name"></ErrorMessage>
          <Field name="phone" placeholder="Phone" type="text" />
          <ErrorMessage name="phone"></ErrorMessage>
          <Field name="email" placeholder="Email" type="email" />
          <ErrorMessage name="email"></ErrorMessage>
          <Field name="password" placeholder="Password" type="password" />
          <ErrorMessage name="password"></ErrorMessage>
          <button type="submit">Add</button>
        </Form>
      </Formik>
      <RegComponent>
        {data.map((e, i) => (
          <Trow
            key={i}
            sl_no={i + 1}
            name={e.name}
            phone={e.phone}
            email={e.email}
            pass={e.password}
          />
        ))}
      </RegComponent>
    </div>
  );
};

export default App;
