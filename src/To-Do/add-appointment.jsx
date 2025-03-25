import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import * as Chiku from 'yup';
import { TextField,Button } from "@mui/material";


export function TodoAddAppointment() {

    let [Cookies,setCookie,removeCookies] = useCookies(['userid'])
    let navigate = useNavigate();

    let formik = useFormik(
        {
            initialValues: {
                title: '',
                date: '',
                userid: Cookies['userid']
            },
             validationSchema:Chiku.object({
                        title:Chiku.string().required("TITLE is required").min(4,"Title must be atleast 4 characters"),
                        date:Chiku.string().required("Date is required"),
                    }),
            onSubmit: (data => {
                axios.post('http://localhost:4000/Assignment', data)
                    .then(() => {

                    })
                navigate('/dash-board')
            })
        }
    )
    return (
        <div className="container bg-light p-4 mt-5 rounded rounded-3" style={{ width: '500px' }}>
            <form onSubmit={formik.handleSubmit}>
                <h3>Add Appointment:-<span className="fs-2 fw-bold">{Cookies['userid']}</span> </h3>
                <dl>
                    {/* <dt><label><h4>Task</h4></label></dt> */}
                    <dd> <TextField label="Task"  variant="standard" type="text" name="title" onChange={formik.handleChange} placeholder="Add New Appointment" className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.title}</dd>
                    {/* <dt><label><h4>Date</h4></label></dt> */}
                    <dd> <TextField   variant="standard" type="date" name="date" onChange={formik.handleChange} className="form-control mt-3" /></dd>
                    <dd className="text-danger">{formik.errors.date}</dd>
                </dl>
                <Button className="btn btn-warning mx-2" variant="contained" type="submit">ADD</Button>
                <Link className="btn btn-success" to={'/dash-board'}>Back</Link>
            </form>
        </div>
    )
}