import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function Details() {
    const [detail, setdetail] = useState({ id: 0, title: '', category: '', price: 0, image: '', rating: { rate: 0, count: 0 }, description: '' });
    let params = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setdetail(response.data)
            })
    })
    return (
        <div>
            <dl>
                <dt>id</dt>
                <dd>{detail.id}</dd>
                <dt>Title</dt>
                <dd>{detail.title}</dd>
                <dt>image</dt>
                <dd><img src={detail.image} alt="product-pic" style={{ height: '100px', width: '100px' }} /></dd>
                <dt>price</dt>
                <dd>{detail.price}</dd>
                <dt>description</dt>
                <dd>{detail.description}</dd>
            </dl>
        </div>
    )
}