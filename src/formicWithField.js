import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import "./App.css";

let schema = yup.object().shape({
  name: yup.string().required().min(2),
  Phone: yup.number().positive().integer(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const Basic = () => (
  <div>
    <h1>User Details</h1>
    <Formik
      initialValues={{ name: "", phone: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
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
  </div>
);

export default Basic;
