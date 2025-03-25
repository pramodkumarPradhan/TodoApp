import { useState } from "react";

export function MouseMove() {
    const [picmove, setpicmove] = useState({ position: "fixed", left: '', top: '' });

    function Mouse(e) {
        setpicmove({
        position:'fixed',
        left:e.clientX+'px',
        top:e.clientY+'px'
        })
    }
    return (
        <div className="container-fluid" onMouseMove={Mouse} >
            <div style={{ height: "100vh" }}></div>
            <img src="logo192.png" style={picmove}  width='50' height='50' alt="react" />
        </div>
    );
}