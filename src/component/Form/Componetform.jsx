import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export function Componentform() {
    return (
        <div className="container-fluid mt-5">
            <h3>User login</h3>
            <Formik initialValues={{ Username: '', Phone: '', Age: '' }} validationSchema={
                yup.object({Username: yup.string().required("Username cannot be empty").min(4, "enter minimu 4 char"),
                        Phone: yup.string().required("enter phone number").matches(/\+91\d{10}/, "invalid number"),
                        Age: yup.number().min(10, "age mjst be greater than 10").max(40, "age must be less than 40")} )}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                <Form>
                    <dl>
                        <dt>Username</dt>
                        <dd><Field type="text" name="Username" /></dd>
                        <dd>< ErrorMessage name="Username" /></dd>
                        <dt>Phone</dt>
                        <dd><Field type="text" name="Phone" /></dd>
                        <dd><ErrorMessage name="Phone" /></dd>
                        <dt>Age</dt>
                        <dd><Field type="number" name="Age" /></dd>
                        <dd><ErrorMessage name="Age" /></dd>
                    </dl>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}