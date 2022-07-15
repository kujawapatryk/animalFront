import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {apiUrl} from "../../config/api";
import bcrypt from 'bcryptjs';


export const Former = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                mail: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required('Name is required')
                    .max(64, 'The name cannot be longer than 64 characters'),
                mail: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
            })}
            onSubmit=  {async fields => {
                try {

                        fields.password = bcrypt.hashSync(fields.password, '$2a$10$CwTycUXWue0Thq9StjUM0u');
                    fields.confirmPassword = bcrypt.hashSync(fields.confirmPassword, '$2a$10$CwTycUXWue0Thq9StjUM0u');
                    const res = await fetch(`${apiUrl}/registration`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(fields, null, 4),
                    }).then((response) => {
                        if(response.status === 200){
                            fields.name = '';
                            fields.mail = '';
                            fields.password = '';
                            fields.confirmPassword = '';
                            alert('Konto zostało utworzone.');

                        }else if(response.status === 408){
                            alert("Coś poszło nie tak, spróbuj później");
                        }else if(response.status === 397){
                            alert("Taki użytkownik już istnieje")
                        }

                    });

                }

                finally {

                }

            }}
            render={({errors, status, touched}) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text"
                               className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}/>
                        <ErrorMessage name="name" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Email</label>
                        <Field name="mail" type="text"
                               className={'form-control' + (errors.mail && touched.mail ? ' is-invalid' : '')}/>
                        <ErrorMessage name="mail" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password"
                               className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                        <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field name="confirmPassword" type="password"
                               className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">Register</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </Form>
            )}
        />
    )
}

