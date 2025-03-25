import { useEffect, useState } from "react";

export function Fetch() {

    const [value, setvalue] = useState({ Title: '', Price: 0, Rating: { Ratings: 0, Reviews: 0 }, Offers: [], Image: '' });
    function Product() {
        fetch('ajax.json')
            .then(Response => Response.json())
            .then(product => {
                setvalue(product);
            })
    }

    useEffect(() => {
        Product();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3 ">
                    <img src={value.Image} alt="playstation" width='100%' />
                </div>
                <div className="col-9 ">
                    <div className="fs-4 fw-bold">
                        {value.Title}
                    </div>
                    <div className="mt-2">
                        <span className="bg-success text-white m-1">4.7<span className="bi bi-star-fill fs-6"></span> </span>
                        <span>{value.Rating.Ratings.toLocaleString()}Ratings &</span>
                        <span>{value.Rating.Reviews}Reviews</span>
                    </div>
                    <div className="my-3">
                        <div className="fs-2 fw-bold">
                            &#8377; {value.Price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                        </div>
                    </div>

                    <div className="mt-3">
                        <ul className="list-unstyled">
                            {
                                value.Offers.map(data => <li className="mt-3">{data}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}