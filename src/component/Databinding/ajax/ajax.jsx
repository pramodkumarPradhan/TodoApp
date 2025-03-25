import { useEffect, useState } from "react";
export function Ajax() {

    const [PlayStation, setProduct] = useState({ Title: '', Price: 0, Rating: { Ratings: 0, Reviews: 0 }, Offers: [], Image: '' });
   
    function details() {
        var http = new XMLHttpRequest();
        http.open("get", "ajax.json", true);
        http.send();
        http.onreadystatechange = function pageload() {
            if (http.readyState === 4) {
                setProduct(JSON.parse(http.responseText))
            }
        }

    }

    useEffect(() => {
        details();
    }, [])

    return (
        <div className="container-fluid home">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={PlayStation.Image} alt="PlayStation®5" className="w-100" />
                </div>
                <div className="col-9">
                    <div>
                        <div className="fs-4 mb-2 fw-bold">{PlayStation.Title}</div>
                    </div>
                    <div>
                        <span className="bg-success text-white m-1">4.7<span className="bi bi-star-fill fs-6"></span> </span>
                    <span >{PlayStation.Rating.Ratings}Ratings &</span>
                    <span>{PlayStation.Rating.Reviews}Reviews</span>
                </div>
                <div className="my-3">
                    <div className="fs-2 fw-bold"> &#8377; {PlayStation.Price.toLocaleString('en-in')}</div>
                </div>
                <div >
                    <h5>Available offers</h5>
                    <ul className=" list-unstyled">{
                        PlayStation.Offers.map(ps5 => <li className="mb-2">{ps5}</li>)
                    }
                    </ul>

                </div>
            </div>
        </div>
        </div >
    );
}