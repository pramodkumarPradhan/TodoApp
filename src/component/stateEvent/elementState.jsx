import { useState } from "react";

export function ButtonDemo() {
    const [tip, settip] = useState('');
    const [username, setUsername] = useState('');
    function Usernamechk() {
        settip('PLEASE WRITE IN BLOCK LANGUAGE')
    }
    function handleblur() {
        settip("");
        setUsername(username.toUpperCase());
    }
    function handlechage(e){
        setUsername(e.target.value)
        
    }
    return (
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt className="fs-5">Username:</dt>
                <dd><input type="text" value={username} onChange={handlechage} onBlur={handleblur} onFocus={Usernamechk} placeholder="Enter your Username" /></dd>
                <dd>{tip}</dd>
            </dl>

        </div>
    );
}