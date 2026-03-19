import React, { useState } from 'react';
import './LoginForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    // Perform login action
    setSubmitting(false);
    setLoading(false);
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>Login</button>
          {loading && <CircularProgress size={24} />} 
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
