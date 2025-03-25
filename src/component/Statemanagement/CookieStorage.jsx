import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"


export function CookiesStorage() {
    const [Username, setUsername] = useState('')
    const [Cookies, setCookies, removeCookies] = useCookies(['Username']);

    function onInputcng(e) {
        setUsername(e.target.value)
    }
    function onSignINClick() {
        setCookies('Username', Username, { expires: new Date('2025-03-12') });
    }
    function onSignOutClick() {
        removeCookies('Username')
    }
    useEffect(() => {

    }, [])
    return (
        <div className="container-fluid" >
            <nav className=" d-flex justify-content-between border border-2 mt-3 p-2" >
                <div className="fs-3 fw-bold ">YouTube</div>
                <div>
                    {

                        (Cookies['Username'] === undefined) ?
                            <div className="input-group">
                                <input type="text" placeholder="Enter your Username" onChange={onInputcng} className="form-control" />
                                <button className="btn btn-warning" onClick={onSignINClick}>SignIn</button>
                            </div>
                            :
                            <div className="bi bi-person-fill fs-3">{Cookies['Username']} <button onClick={onSignOutClick} className="btn btn-danger">SignOut</button></div>

                    }
                </div>
            </nav>

        </div>
    )
}