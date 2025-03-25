import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { TextField,Button } from "@mui/material";

export function Todologin() {
    const [Cookies, setCookies, removeCookies] = useCookies(['userid']);

    let navigate = useNavigate();

    let formik = useFormik({
        initialValues: {
            "userid": '',
            "password": ''
        },
        validationSchema: yup.object({
            userid: yup.string().required("User Id is required").min(4, "User Id must be atleast 4 characters"),
            password: yup.string().required("password is required")
           
        }),
        onSubmit: ((data) => {
            axios.get('http://localhost:4000/User')
                .then(response => {
                    var UserDetails = response.data.find(details => details.userid === data.userid);
                    if (UserDetails) {
                        if (data.password === UserDetails.password) {
                            setCookies('userid', UserDetails.userid)
                            navigate('/dash-board')
                        }
                        else {
                            alert("Invalid Password");
                        }
                    } else {
                        alert("User does't exist")
                    }
                })
        })
    })
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '600px' }}>
                <form className="bg-light p-4 rounded rounded-4" style={{ width: '300px' }} onSubmit={formik.handleSubmit}>
                    <h2>User Login</h2>
                    <dl>
                        {/* <dt><label className="fw-bold fs-5 text-primary ">User Id</label></dt> */}
                        <dd><TextField type="text" variant="standard" className="form-control " onChange={formik.handleChange} placeholder="Enter user id" name="userid" label="User ID" /></dd>
                        <dd className="text-danger">{formik.errors.userid}</dd>
                        {/* <dt ><label className="fw-bold fs-5 text-primary " >Password</label></dt> */}
                        <dd><TextField type="password" variant="standard" className="form-control " onChange={formik.handleChange} placeholder="Enter password" name="password" label="Password" /></dd>
                        <dd className="text-danger">{formik.errors.password}</dd>
                    </dl>
                    <Button variant="contained" color="error" type="submit" className=" w-100 text-white p-1 rounded ">Login</Button>
                    <div>Back to <Link to='/register'>Register</Link></div>
                </form>
            </div>
        </div>
    )
}