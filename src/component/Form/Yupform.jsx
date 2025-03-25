import { useFormik } from "formik"
import * as pramod from "yup"
export function Yupform() {
    const formik = useFormik({
        initialValues: {
            Username: '',
            Phone: '',
            Age: 0
        },
        validationSchema: pramod.object({
            Username: pramod.string().required("Usernam.}|me required").min(4, "minimum 4 char"),
            Phone: pramod.string().required("Phone number required").matches(/\+91\d{10}/, "invalid number"),
            Age: pramod.number().min(10, "age must be greater than 10").max(50, "age must be less than 50")
        }),
        onSubmit: (value) => {
            console.log(value);
        }

    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Username:</dt>
                    <dd><input type="text" name="Username" onChange={formik.handleChange} className="form-select w-25" /></dd>
                    <dd>{formik.errors.Username}</dd>
                    <dt>Phone</dt>
                    <dd><input type="text" name="Phone" onChange={formik.handleChange} className="form-select w-25" /></dd>
                    <dd>{formik.errors.Phone}</dd>
                    <dt>Age</dt>
                    <dd><input type="age" name="Age" onChange={formik.handleChange} className="form-select w-25" /></dd>
                    <dd>{formik.errors.Age}</dd>
                </dl>
                <div><button type="submit" className="btn btn-danger">submit</button></div>
            </form>
        </div>
    )
}