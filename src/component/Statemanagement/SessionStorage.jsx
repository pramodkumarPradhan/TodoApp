import { useEffect, useState } from "react"

export function Sessionstorage() {

    const [Username, setUsername] = useState('')

    function UserNamechg(e) {
        setUsername(e.target.value)
    }

    function Usersignin() {
        sessionStorage.setItem('Username', Username)
        window.location.reload();
    }
    function SignOutClick(){
        sessionStorage.removeItem('Username')
        window.location.reload();
    }
    function timeout(){
        sessionStorage.removeItem('Username');
        alert('re-login(session Timeout)')
        window.location.reload()
    }
    useEffect(() => {

    })

    return (
        <div className="container-fluid" style={{ backgroundImage: ' radial-gradient(rgba(58, 114, 166, 0.5), rgba(180, 36, 36, 0.8)) ' }}>
            <nav className="d-flex justify-content-between border p-3 mt-5">
                <div className="fs-2 fw-bold">Youtube</div>
                <div>
                    {
                        (sessionStorage.getItem("Username") === null)
                            ?
                            <div>
                                {
                                    <div className="input-group ">
                                        <input type="text" placeholder="Username" onChange={UserNamechg} className="form-control " />
                                        <button className="btn btn-danger" onClick={Usersignin}>Sign-in</button>
                                    </div>
                                }
                            </div>
                            :
                            <div className="fs-3 fw-bold bi bi-person-fill">{sessionStorage.getItem('Username')} <button className="btn btn-warning" onClick={SignOutClick}>Signout</button> </div>
                    }
                </div>
            </nav>
        </div>
    )
}