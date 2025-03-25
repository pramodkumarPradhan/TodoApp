import { useState } from "react";
import { useCaptcha } from "../../hooks/Captchahooks";
import { useFetch } from "../../hooks/Fetchhooks";

export function Register() {
    const [name] = useState('User Login')

    // let fetch = useFetch('https://fakestoreapi.com/products/categories');
    let code = useCaptcha();
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <form className="border border-1 w-25 p-4  alert alert-warning alert-dismissible ">
                <h3 className="bi bi-person-fill">{name} </h3>
                <dl>
                    <dt>Username:</dt>
                    <dd><input type="text" className="form-control " /></dd>
                    <dt>Password:</dt>
                    <dd><input type="text" className="form-control " /></dd>
                    <dt>Email:</dt>
                    <dd><input type="text" className="form-control " /></dd>
                    <dt>Phone:</dt>
                    <dd><input type="text" className="form-control " /></dd>
                    <dt>Verify Code <button className="btn bi bi-arrow-clockwise"></button></dt>
                    <dd>{code}</dd>
                </dl>
                <button className="btn btn-danger w-100">LOGIN</button>
                {/* <ul>
                    {
                     fetch.map(product=><li>{product}</li>)  
                    }
                </ul> */}
            </form>
        </div>
    )
}