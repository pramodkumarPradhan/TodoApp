import { useState } from "react";

export function ArrayOBJ() {
    var [details] = useState(
        [
            { Name: "TV", Price: 45000.44 },
            { Name: "Mobile", Price: 12000.33 },
            { Name: "Watch", Price: 3000.44 },
            { Name: "Jeans", Price: 3600.55 }
        ]
    );
    return (
        <div className="container-fluid">
            <h3 className="text-white fs-2 fst-italic text-center border border-2 mt-2 shadow-sm bg-danger  ">Product Details:</h3>
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Functinality</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map(product => <tr> <td>{product.Name}</td> <td>{product.Price}</td> <td><button className="bi bi-pen-fill btn btn-warning"> </button>  <button className="bi bi-tools btn btn-danger"></button></td></tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}