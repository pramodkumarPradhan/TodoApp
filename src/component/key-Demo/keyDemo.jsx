import axios from "axios";
import { useState } from "react";

export function Keydemo() {
    const [name, setname] = useState('');
    const [error, seterror] = useState('');
    const [errorhandle, seterrorhandle] = useState('');
    // const [password, setpassword] = useState('d-none');
    // const [metervalue, setmetervalue] = useState('1');
    const [des, setdes] = useState('');
    const [progresswidth, setprogresswidth] = useState({ width: '' })
    const [progressclass, setprogressclass] = useState('')

    function namecng(e) {
        setname(e.target.value)
    }

    function verifyname() {
        axios.get('keydemo.json')
            .then(response => {
                for (var user of response.data) {
                    if (user.UserName === name) {
                        seterror("User Name Taken - Try Another")
                        seterrorhandle("text-warning")
                        break;
                    }
                    else {
                        seterror("Username Available");
                        seterrorhandle("text-primary")
                    }
                }
            })
    }

    // function pswdchk(e) {
    //     if (e.which >= 65 && e.which <= 90) {
    //         setpassword('d-block')
    //     }
    //     else {
    //         setpassword('d-none')
    //     }
    // }
    function passwordcheck(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setprogressclass('progress-bar bg-success  progress-bar-striped progress-bar-animated')
            setprogresswidth({ width: '100%' })
            setdes('strong password')
        }
        else {
            if (e.target.value.length <= 3) {
                setprogresswidth({ width: '20%' })
                setprogressclass('progress-bar bg-danger progress-bar-striped progress-bar-animated')
                setdes('Poor')
            }
            else {
                setprogresswidth({ width: '60%' })
                setprogressclass('progress-bar bg-primary  progress-bar-striped progress-bar-animated')
                setdes('average password')
            }
        }
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-content-center mt-5">
            <div>
                <h3>User Login <span className="bi bi-person-fill"></span></h3>
                <dl >
                    <dt>Username:</dt>
                    <dd><input type="text" onChange={namecng} onKeyUp={verifyname} className="form-control w-100" /></dd>
                    <dd className={errorhandle}>{error}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" onKeyUp={passwordcheck} className="form-control w-100" /></dd>
                    {/* <dd className={password}><span className="bi bi-exclamation-triangle text-danger"> Warning : Caps ON </span></dd> */}
                    {/* <dd><meter className="w-100" min={1} max={100} value={metervalue}></meter></dd> */}
                    <dd>
                        <div className="progress">
                            <div style={progresswidth} className={progressclass} >
                                {des}
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    );
}