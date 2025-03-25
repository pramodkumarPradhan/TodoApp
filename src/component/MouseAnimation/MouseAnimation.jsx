import { useState } from "react";
import '../MouseAnimation/mouseAnimation.css';
export function Animation() {
    const [Animation, setAnimation] = useState('5s');
    function rotate() {
        setAnimation('1s')
    }

    function stop() {
        setAnimation('5s')
    }
    return (
        <div className="container-fluid d-flex bg-dark justify-content-center align-items-center" style={{ height: '100vh' }}>
            <img onMouseOver={rotate} onMouseOut={stop} style={{ animationDuration: Animation }} className="react-icon" src="../logo192.png" alt="React Icon" />
        </div>

    );
}