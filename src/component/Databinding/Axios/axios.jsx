import { useEffect, useState } from "react";
import axios from "axios";
export function Axios() {
    const [details, setdetails] = useState({ Title: '', Price: 0, Rating: { Ratings: 0, Review: 0 }, Offers: [], Image: '' });

    function product() {
        axios.get('ajax.json')
            .then(responce => {
                setdetails(responce.data);
            })
    }

    useEffect(() => {
        product();
    }, []);

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-3">
                    <img src={details.Image} alt="playstation" width="100%" />
                </div>
                <div className="col-9">
                    <div>
                        <div className="fs-4 mb-2 fw-bold">{details.Title}</div>
                    </div>
                    <div>
                        <span className="bg-success text-white m-1">4.7<span className="bi bi-star-fill fs-6"></span> </span>
                        <span >{details.Rating.Ratings}Ratings &</span>
                        <span>{details.Rating.Review}Reviews</span>
                    </div>
                    <div className="my-3">
                        <div className="fs-2 fw-bold"> &#8377; {details.Price.toLocaleString('en-in')}</div>
                    </div>
                    <div>
                        <ul>
                           {
                             details.Offers.map(product=> <li>{product}</li>)
                           }
                        </ul>
                    </div>
                    <div className="mt-5">
                        <button className="bi bi-cart3 btn btn-warning text-white p-3 border border-1 w-25">ADD TO CART</button>
                        <button className="bi bi-lightning-fill btn btn-danger p-3 w-25 m-3 border border-1 ">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
