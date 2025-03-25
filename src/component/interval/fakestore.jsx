import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function CarouselDemo() {
    const [product, setproduct] = useState({ id: 0, title: '', price: 0, description: '', image: '', rating: { rate: 0, count: 0 }, category: '' });
    const [tip, settip] = useState('')
    let productid = useRef(1);
    let thread = useRef(null);

    function loadproduct(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setproduct(response.data)
            })
    }

    useEffect(() => {
        loadproduct(1);
    }, [])
    function loadproductshow() {
        productid.current = productid.current + 1
        loadproduct(productid.current)
    }
    function Rightclk() {
        productid.current = productid.current + 1
        console.log(productid.current)
        loadproduct(productid.current)
    }
    function Leftclk() {
        productid.current = productid.current - 1;
        loadproduct(productid.current);
    }
    function rangechg(e) {
        productid.current = e.target.value;
        loadproduct(productid.current);
    }
    function playbtn() {
        thread.current = setInterval(loadproductshow, 500)
        settip('(Slideshow Started)')
    }
    function pausebtn() {
        clearInterval(thread.current)
        settip('(Slideshow Paused)')
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="card w-50 p-4 m-4 text-center ">
                <div className="card-header fw-bold fs-6 text-danger">
                    {product.title}
                    <div>
                        {tip}
                    </div>
                </div>
                <div className="card-body row">
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center ">
                        <button className="btn btn-danger bi bi-chevron-left" onClick={Leftclk}></button>
                    </div>
                    <div className="col-10">

                        <img src={product.image} alt="product" height='350' width='400' />
                    </div>
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center ">
                        <button className=" btn btn-danger bi bi-chevron-right" onClick={Rightclk}></button>
                    </div>
                </div>
                <div className="card-footer">
                    <div>
                        <input type="range" onChange={rangechg} className="form-range" min={1} max={20} value={productid.current} />
                    </div>
                    <div>
                        <button className="btn btn-primary bi bi-play" onClick={playbtn}></button>
                        <button className="btn btn-warning bi bi-pause mx-2" onClick={pausebtn}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}