import { useState } from "react";

export function Form() {
const[Theme,setTheme]=useState('border border-3 p-4 rounded');
const[btn,setbtn]=useState('btn btn-danger w-100 mt-3')
function darkmode(e){
   if(e.target.checked){
    setTheme('border border-3 p-4 bg-dark text-white rounded')
    setbtn('btn btn-primary w-100 mt-3')
   }
   else{
    setTheme('border border-3 p-4 rounded')
    setbtn('btn btn-danger w-100 mt-3')
   }
}
    return (
        <div  className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div>
                <form className={Theme}>
                    <div>
                        <div className="form-switch mb-2">
                            <input type="checkbox" onChange={darkmode} className="form-check-input" /> <label> Dark Mode</label>
                        </div>
                        <h3>User Login <span className="bi bi-person-fill"></span></h3>
                        <dl>
                            <dt>Username:</dt>
                            <dd><input type="text" className="form-control" /></dd>
                            <dt>Password:</dt>
                            <dd><input type="password" className="form-control" /></dd>
                            <button className={btn}>submit</button>
                        </dl>
                    </div>
                </form>
            </div>
        </div>

    );
}