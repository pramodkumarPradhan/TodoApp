import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function FakestoreHome() {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                setproduct(response.data);
            })

    }, [])
    return (
        <div>
            <h2>Product Details</h2>
            <ul className="list-unstyled">
                {
                    product.map(item=><li><Link to={`products/${item}`} className="btn btn-success mt-2 w-25">{item.toUpperCase()}</Link></li>)
                }
            </ul>
        </div>
    )
}