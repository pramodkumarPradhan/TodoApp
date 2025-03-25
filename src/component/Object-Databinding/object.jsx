import { useState } from "react";

export function Object() {
    var [pramod] = useState({ Id: 1, Name: "TV", Price: 4000.33, Stock: true, Cities: ['Delhi', 'Hyd'], Rating: { Rate: 4.5, Count: 500 } });
    return (
        <div className="container-fluid">
            <dl>
                <dt>Id</dt>
                <dd>{pramod.Id}</dd>
                <dt>Name</dt>
                <dd>{pramod.Name}</dd>
                <dt>Price</dt>
                <dd>{pramod.Price}</dd>
                <dt>Stock</dt>
                <dd>
                    {
                        (pramod.Stock === true) ? 'Available' : 'out of stock'
                    }
                </dd>
                <dt>Cities</dt>
                <dd>
                    <ol>
                        {
                            pramod.Cities.map(city => <li>{city}</li>)
                        }
                    </ol>
                </dd>
                <dt>Rating</dt>
                <dd>
                    {pramod.Rating.Rate} <span className="bi bi-star-fill"></span> {pramod.Rating.Count}
                </dd>
                {/* <dt>Keys</dt>
                <dd>
                    <ol>
                        {
                            Object.keys(pramod).map((value) => <li>{value}</li>)
                        }
                    </ol>
                </dd> */}
            </dl>
        </div>
    );
}