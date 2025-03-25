import axios from "axios";
import { useEffect, useState } from "react";

export function Nasa() {
    const [Roverpic, setroverpic] = useState({ photos: [] });

    useEffect(() => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PX1SOrL7EplHHIKw1ETR19B6FbFkjcERX6IVI2zr")
            .then(response => {
                setroverpic(response.data);
            })
    }, [])
    return (
        <div className="container-fluid">
            <table className="table table-hover">
                <thead>
                   <tr>
                   <th>photo Id</th>
                    <th>Camera Name</th>
                    <th>Rover name</th>
                    <th>Preview</th>
                   </tr>
                </thead>
                <tbody>
                    {
                        Roverpic.photos.map(data =>
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.camera.full_name}</td>
                                <td>{data.rover.name}</td>
                                <td><img src={data.img_src} alt="rover" width="100" height="100" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}