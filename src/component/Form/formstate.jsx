import { Formik, Form, ErrorMessage, Field } from "formik"
import * as yup from "yup"
export function Formstate() {
    return (
        <div className="container-fluid">
            <h3>UserName</h3>
            <Formik initialValues={{ Username: '', Contact: '', Age: '' }} validationSchema={yup.object({
                Username: yup.string().required("Username cannot be empty").min(4, "name must be 4 letter"),
                Contact: yup.string().required("Contact can't be empty").matches(/\+91\d{10}/),
                Age: yup.number().required('age Should be written').min(10, "age must be abhove 10").max(40, "age must be less than 40")
            })} onSubmit={(value) => {
                console.log(value)
            }}>
                {
                    form => <Form>
                        <dl>
                            <dt>Username:</dt>
                            <dd><Field type="text" name="Username" /></dd>
                            <dd><ErrorMessage name="Username" /></dd>
                            <dt>Contact:</dt>
                            <dd><Field type="text" name="Contact" /></dd>
                            <dd><ErrorMessage name="Contact" /></dd>
                            <dt>Age:</dt>
                            <dd><Field type="number" name="Age" /></dd>
                            <dd><ErrorMessage name="Age" /></dd>
                        </dl>
                        <button type="submit" disabled={!form.isValid} >submit</button>
                        <button type="submit" className={(form.dirty) ? 'd-inline' : 'd-none'}>save</button>
                        {Object.keys(form.errors).length > 0 && (
                            <div>
                                <div className="fs-3">Here all the errors</div>
                                <ul>
                                    {
                                        Object.keys(form.errors).map(property =>
                                            <li>{form.errors[property]}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        )}
                    </Form>
                }

            </Formik>
        </div>
    )
}