import $ from "jquery";
import { useEffect, useState } from "react";

export function Jquery() {
    const [jquery, setproduct] = useState({ Title: '', Price: 0, Rating: { Ratings: 0, Reviews: 0 }, Offers: [], Image: '' })
    function products() {
        $.ajax({
            method: 'get',
            url: "ajax.json",
            success: (product) => {
                setproduct(product);
            }
        })
    }
    useEffect(() => {
        products();
    }, []);


    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col-3 ">
                    <div><img src={jquery.Image} alt="playstation" width='100%' /></div>
                    
                </div>
                <div className="col-9 mt-3">
                    <div className="fs-4 fw-bold">
                        {jquery.Title}
                    </div>
                    <div className="mt-2">
                        <span className="bg-success text-white m-1">4.7<span className="bi bi-star-fill fs-6"></span> </span>
                        <span>{jquery.Rating.Ratings.toLocaleString()}Ratings &</span>
                        <span>{jquery.Rating.Reviews}Reviews</span>
                    </div>
                    <div className="my-3">
                        <div className="fs-2 fw-bold">
                            &#8377; {jquery.Price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                        </div>
                    </div>

                    <div>
                        <h3>Available Offers</h3>
                        <ul className="list-unstyled">
                            {jquery.Offers.map(data => <li className="mt-3">{data}</li>)}
                        </ul>
                    </div>
                    <div className="mt-5">
                       <button className="bi bi-cart3 btn btn-warning text-white p-3 border border-1 w-25">ADD TO CART</button>
                        <button className="bi bi-lightning-fill btn btn-danger p-3 w-25 m-3 border border-1 ">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}