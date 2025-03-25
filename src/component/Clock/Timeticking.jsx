import { useEffect, useState } from "react";

export function Timeticking() {
    const [time, settime] = useState('');

    function timecheck() {
        var now = new Date();
        settime(now.toLocaleTimeString())
    }

    useEffect(() => {
        setInterval(timecheck, 2000)
    })
    return (
        <div className="container-fluid justify-content-center align-items-center d-flex" style={{height:'100vh'}}>
            <h1 className="border border-3 p-5 bg-dark text-white rounded">{time}</h1>
        </div>
    );
}