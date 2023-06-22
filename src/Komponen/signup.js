import React from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

export const SignUp = () => {
    const doregister = (values) => {
        console.log('form values', values);
        setTimeout(() => {
            formik.setSubmitting(false)
            formik.resetForm()

        }, 2000);
    }

const formik = useFormik({
    // initial values 
    initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPhoneNumber: "",
    },
    // validation schema
    validationSchema: Yup.object({
        username: Yup.string()
            .required(),
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .required()
            .min(8)
            .matches(/[A-Z]/g, 'Should contain at least one uppercase letter')
            .matches(/[a-z]/g, 'Should contain at least one lowercase letter')
            .matches(/[0-9]/g, 'Should contain at least one number'),
        confirmPhoneNumber: Yup.string()
            .required('Enter phone number')
    }),
    // handleSubmit
    onSubmit: doregister,

});
console.log(formik)
return (
    <div className=" justify-content-center alignt-items-center 100-w vh-100 bg-warning">
        <div className="40-w p-5 rounded bg-white ">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <div className="mb-2">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="form-control"
                        name="username"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && <div className="error text-danger">{formik.errors.username}</div>}
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="form-control"
                        name="email"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && <div className="error text-danger">{formik.errors.email}</div>}
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="form-control"
                        name="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && <div className="error text-danger">{formik.errors.password}</div>}
                </div>
                <div className="mb-2">
                    <label htmlFor="PhoneNumber">Phone number</label>
                    <input type="number"
                        placeholder="Enter phone number"
                        className="form-control"
                        name="confirmPhoneNumber"
                        {...formik.getFieldProps('confirmPhoneNumber')}
                    />
                    {formik.touched.confirmPhoneNumber && formik.errors.confirmPhoneNumber && <div className="error text-danger">{formik.errors.confirmPhoneNumber}</div>}
                </div>
                <div className="d-grid">
                    <button type="submit" disabled={formik.isSubmitting} className="btn btn-dark">Submit</button>
                </div>
                <p className="mt-2 text-none">
                    Forgot<a href="" className="ms-1">password ?</a><span className="ml-5">Already account ?<Link to="/login" className="ms-2">Login</Link></span>
                </p>
            </form>
        </div>
    </div>
)
}
