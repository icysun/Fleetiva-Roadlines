import React, { useState } from 'react';
import './SignupForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupFormSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function SignupForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    // Perform signup action
    setSubmitting(false);
    setLoading(false);
  }

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={SignupFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>Signup</button>
          {loading && <CircularProgress size={24} />} 
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
