import { useRef, useState } from "react"

export function IntervalDemo() {
    const [loadimage, setloadimage] = useState('d-block');
    const [progress, setprogress] = useState('d-none');
    const [image, setimage] = useState('d-none');
    const [pvalue, setpvalue] = useState('1');
    const [lable, setlable] = useState('')

    let thread = useRef(null);
    let interval = useRef(null);

    var count = 1;
    function counter() {
        count++;
        setpvalue(count);
        interval.current = count;
        if (count === 100) {
            clearInterval(thread.current)
            setprogress('d-none')
            setimage('d-block')
        }
    }


    function loadclk() {
        setloadimage('d-none')
        setprogress('d-block')
        thread.current = setInterval(counter, 100)
    }

    function playclk() {
        setInterval(counter, 100)
        setlable("");
    }
    function pauseclk() {
        clearInterval(thread.current)
        setlable("pause")
    }
    return (
        <div className="container-fluid d-flex text-center justify-content-center align-items-center " style={{ height: '100vh' }}>
            <div>
                <div className={loadimage}>
                    <button className="btn btn-danger" onClick={loadclk}>Load Image</button>
                </div>
                <div className={progress}>
                    <progress min={1} max={100} style={{ height: "40px", width: "350px" }}></progress>
                    <div>
                        {pvalue}%completed {lable}
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary bi bi-pause " onClick={pauseclk}></button>
                        <button className="btn btn-danger bi bi-play" onClick={playclk}></button>
                    </div>
                </div>
                <div>
                    <img src="iphone16-teal.png" className={image} alt="Iphone" height='400' />
                </div>
            </div>
        </div>
    )
}