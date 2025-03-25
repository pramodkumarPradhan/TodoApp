import { useState } from "react";
import { Weather } from "../component/ReactEvent/Weather";
import { CarouselDemo } from "../component/interval/fakestore";

export function ConditionalDemo() {
    const [Project, setProject] = useState();

    function LoadData(cname) {
        switch (cname) {
            case 'Weather':
                setProject(< Weather />);
                break;
            case 'Fakestore':
                setProject(< CarouselDemo />)
                break;
        }
    }
    return (
        <div className="container-fluid">
            <h3>Show Projects:-</h3>
            <button onClick={() => { LoadData('Weather') }} className="btn btn-danger my-2 ">Weather</button>
            <button onClick={() => { LoadData('Fakestore') }} className="btn btn-success ms-2">Fakestore</button>
            <div className="mt-2">
                {
                    Project
                }
            </div>
        </div>
    )
}