import { useState } from "react"

export function StopWatch() {
    const [hour, sethour] = useState(0);
    const [min, setmin3] = useState(0);
    const [sec, setsec] = useState(0);
    const [ms, setms] = useState(0);

    const[btn,setbtn]=useState('start');

    var mss = 0;
    var secc = 0;
    var mins = 0;
    var hours = 0;
    function Timerfunction() {
        mss++
        if (mss === 100) {
            mss = 0;
            secc++;
            setsec(secc)
        }
        setms(mss);

    }
    function Timerstart() {
        setInterval(Timerfunction, 10)
        setbtn((btn==='start'?'stop':'start'))
    }
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div>
                <div className="row fs-2 fw-bold mt-5 border border-2 p-3">
                    <div className="col">
                        {hour}Hour
                    </div>
                    <div className="col">
                        {min}Min
                    </div>
                    <div className="col">
                        {sec}Sec
                    </div>
                    <div className="col">
                        {ms}Msec
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={Timerstart} className="btn btn-dark mt-4">{btn}</button>
                </div>
            </div>
        </div>
    )
}