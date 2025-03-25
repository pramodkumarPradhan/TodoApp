import { useFormik } from "formik"
export function FormData() {
    function formvalidate(user) {
        var errors = { Username: '', PhoneNo: '', City: '', Gender: '' };

        if(user.Username.length===0){
            errors.Username = 'User Name Required';
        } else {
            if(user.Username.length < 4){
                errors.Username = 'Name too short';
            } else {
                errors.Username = '';
            }
        }

        if (user.PhoneNo.length=== 0) {
            errors.PhoneNo = "Please enter your number"
        } else {
            if (user.PhoneNo.match(/\+91\d{10}/)) {
                errors.PhoneNo = '';
            } else {
                errors.PhoneNo = "Please enter correct phone number";
            }

        }

        if (user.City === '-1') {
            errors.City = "Please Select City";
        } else {
            errors.City = "";
        }

        if (user.Gender === "") {
            errors.Gender = "Please select a gender"
        } else {
            errors.Gender = "";
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            Username: '',
            PhoneNo: '',
            City: '-1',
            Gender: ''
        },
        validate: formvalidate,
        onSubmit: (value) => {
            console.log(value);
        }
    })
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form onSubmit={formik.handleSubmit} className="border p-3 bg-dark text-white" style={{ width: '300px' }}>
                <h2>User Login <span className="bi bi-person-fill"></span></h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" name="Username" className="form-control" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Username}</dd>
                    <dt>PhoneNo</dt>
                    <dd><input type="text" name="PhoneNo" className="form-control" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.PhoneNo}</dd>
                    <dt>City</dt>
                    <dd>
                        <select className="form-select" name="City" onChange={formik.handleChange}>
                            <option value="-1">Select State</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd className="text-center">
                        <input type="radio" name='Gender' onChange={formik.handleChange} value='Male' /><label>Male</label>
                        <input type="radio" name='Gender' className="ms-5" onChange={formik.handleChange} value='Female' /><label>Female</label>
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                </dl>
                <div className="text-center"><button className="btn btn-danger text-white mt-3" type="submit">submit</button></div>
            </form>
        </div>
    )
}