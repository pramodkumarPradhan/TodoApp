import axios from "axios";
import { useEffect, useState } from "react";

export function Nasacard() {
    const [Rover, setRover] = useState({ photos: [] });


    useEffect(() => {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PX1SOrL7EplHHIKw1ETR19B6FbFkjcERX6IVI2zr')
            .then(response => {
                setRover(response.data);
            })
    }, [])

    return (
        <div className="container-fluid">
            <h3>Rover image</h3>
            <main className="d-flex flex-wrap">
                {
                    Rover.photos.map(pic =>
                        <div className="card w-25 m-2 p-4">
                            <img src={pic.img_src} alt="roverpic" className="card-img-top" height="100" />
                            <div className="card-header ">
                               <div className="fs-3 fw-bold text-center"> {pic.id}</div>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Camera</dt>
                                    <dd>{pic.camera.full_name}</dd>
                                    <dt>Rover Name</dt>
                                    <dd>{pic.rover.name}</dd>
                                </dl>
                            </div>
                        </div>)
                }
            </main>
        </div>
    );
}  