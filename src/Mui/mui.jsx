import { Button, TextField } from "@mui/material";
import { useState } from "react"

export function MUIDemo() {
    var [Username, SetUsername] = useState("");
    var [Password, setpassword] = useState('')

    function Usernameinput(e) {
        SetUsername(e.target.value)
    }
    function password(e) {
        setpassword(e.target.value)
    }
    function btnclk() {
        console.log(Username);
        console.log(Password);
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div>
                <h3>MUI Example:</h3>
                <div>
                    <TextField onChange={Usernameinput} type="text" placeholder="Enter your name" variant="standard" label="UserName" />
                </div>
                <div>
                    <TextField onChange={password} type="text" placeholder="password" variant="standard" label="Password" />
                </div>
                <div>
                    <Button onClick={btnclk} className="w-100 mt-4" variant="contained" color="error" >submit</Button>
                </div>

            </div>
        </div>
    )
}