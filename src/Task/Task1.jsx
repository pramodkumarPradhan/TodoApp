import { useFormik } from "formik";
export function Task() {
    function HandleError(User) {
        var errors = { UserName: '', Age: '', Mobile: '', City: '' }
        if (User.UserName.length === 0) {
            errors.UserName = 'please enter User Name'
        }
        else {
            if (User.UserName.length < 4) {
                errors.UserName = "UserName must 4 char"
            }
            else {
                errors.UserName = '';
            }
        }

        if (User.Age < 10) {
            errors.Age = "Age must be greater than 10"
        }
        else {
            errors.Age ='';
        }

        if (User.Mobile.length=== 0) {
            errors.Mobile = "Please enter Mobile Number";
        }
        else {
            if (User.Mobile.match(/\+91\d{10}/)) {
                errors.Mobile='';
            }
            else {
                errors.Mobile="Please enter a valid mobile number";
            }
        }

        if(User.City==='-1'){
            errors.City='please select City';
        }
        else{
            errors.City='';
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: '',
            Mobile: '',
            City: '-1'
        },
        validate: HandleError,
        onSubmit: (value) => {
            console.log(value);
        }
    })
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

            <form onSubmit={formik.handleSubmit} className="border border-2 rounded-2 alert alert-dismissible alert-success p-3" style={{ width: '300px' }}>
                <h3 className="bi bi-person-fill text-center text-primary fw-bold">User Login</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd>{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd>{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select className="form-select" name="City" onChange={formik.handleChange}>
                            <option value='-1'>Select Your City</option>
                            <option value='Odisha'>Odisha</option>
                            <option value='Hyderabad'>Hyderabad</option>
                        </select>
                    </dd>
                    <dd>{formik.errors.City}</dd>
                </dl>
                <button className="btn btn-primary w-100" type="submit">Submit</button>
            </form>
        </div>
    )
}