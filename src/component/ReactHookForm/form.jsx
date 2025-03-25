import { useForm } from "react-hook-form";
import { Navbar } from "../../Controlled-components/Navbar";

export function Reacthookform() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const result = (value) => {
        console.log(value);
    }
    return (
        <div className="container-fluid">
            <header>
                <Navbar  Theme="bg-dark text-white" Btnstyl='btn btn-success' BrandTitle='Shopper.' Toggles={['Home', 'Shop', 'Pages', "Blog", 'Docs']} />
                <Navbar Navstyl='d-none' Theme="bg-primary text-white" Btnstyl='btn btn-secondary' BrandTitle="Pramod" Toggles={['home','pages','blog','docs']}/>
            </header>
            <h2>User Login<span className="bi bi-person"></span></h2>
            <form onSubmit={handleSubmit(result)}>
                <dl>
                    <dt>Username:</dt>
                    <dd><input type="text" name="Username"{...register('Username', { required: true, minLength: 3 })} /></dd>
                    <dd className="text-danger">
                        {(errors.Username?.type === "required") ? <span>User Name Required</span> : (errors.Username?.type === "minLength") ? <span>Name too short</span> : <span></span>}
                    </dd>
                    <dt>PhoneNo:</dt>
                    <dd><input type="text" name="PhoneNo"{...register('PhoneNo', { required: true, pattern: /\+91\d{10}/ })} /></dd>
                    <dd className="text-danger">
                        {(errors.PhoneNo?.type === 'required') ? <span>phone number required</span> : <span></span>}{(errors.PhoneNo?.type === 'pattern') ? <span>Invalid number</span> : <span></span>}
                    </dd>
                </dl>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}