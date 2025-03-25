
import axios from "axios";
import { useEffect, useState } from "react";
import '../MouseOver/MouseOver.css';
export function MouseEvent() {

    const [images, setimages] = useState([{ img_src: '' }])
    const [mouse, setmouse] = useState('pic-3.jpg');

    useEffect(() => {
        axios.get('PS-5.json')
            .then(response => {
                setimages(response.data)
            })
    }, [])
    function mouseupEvent(e) {
        setmouse(e.target.src)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    {
                        images.map(image =>
                            <div key={image} className="my-3">
                                <img onMouseOver={mouseupEvent} src={image.img_src} alt="ps-5" width="100" height='100' />
                            </div>)
                    }
                </div>
                <div className="col-11 ps-5 mt-3">
                    <img src={mouse} alt="" width='400' height='450' />
                </div>
            </div>
        </div>
    );
}
