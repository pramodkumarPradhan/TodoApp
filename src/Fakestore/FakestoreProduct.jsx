import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Product() {
    const [products, setProducts] = useState([{ id: 0, title: '', category: '', price: 0, image: '', rating: { rate: 0, count: 0 }, description: '' }]);

    let { category } = useParams();
    console.log(category)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then((response) => {
            console.log(response.data)
            setProducts(response.data);
        })
    }, [])

    return (
        <div>
            <h3>Product Category:</h3>
            <div className="d-flex ">
                {
                    products.map((item) =>
                        <div className="card mt-2 m-3 " style={{ width: "150px" }}>
                            <div className="card-body">
                                <img src={item.image} className="card-img-top" alt="" style={{ height: '100px', width: '100px' }} />
                            </div>
                            <div className="card-footer">
                                <Link className="btn btn-success w-100 bi bi-eye-fill" to={`/details/${item.id}`} > Details</Link>
                            </div>
                        </div>)
                }
            </div>
            <div><Link to={"/"} >Back</Link> to Home</div>
        </div>
    )
}