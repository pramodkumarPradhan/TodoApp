import { useEffect, useState } from "react"

export function Login() {
    useEffect(() => {
        console.log('User Login');
        return () => {
            console.log('login logout')
        }

    })
    return (
        <div>
            <h3>
                User Login
            </h3>
        </div>
    )
}

export function Resister() {
    useEffect(() => {
        console.log('User Resister');
        return ()=>{
            console.log('User deresister')
    }
    })
    return (
        <div>
            <h3>User Resister</h3>
        </div>
    )
}

export function Mount() {
    const [user, setuser] = useState('');

    function loginclk() {
        setuser(<Login />)
    }
    function resisterclk() {
        setuser(<Resister />)
    }

    return (
        <div className="container-fluid ">
            <h3>Mount Check</h3>
            <div>
                <button onClick={loginclk} className="btn btn-danger">Log In</button>
                <button onClick={resisterclk} className="btn btn-warning mx-2">Resister</button>
            </div>
            <div>{user}</div>
        </div>
    )
}