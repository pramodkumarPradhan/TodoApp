import { useState } from "react";

export function ReactEvent(e) {
    const [product, setproduct] = useState({ name: 'tv', price: 0, city: "Odisha", Stock: true });
   
    function ProductNameCng(e) {
        setproduct({
            name: e.target.value,
            price: product.price,
            city: product.city,
            Stock: product.Stock
        });
    }
    function productpricecng(e) {
        setproduct({
            name: product.name,
            price: e.target.value,
            city: product.city,
            Stock: product.Stock
        });
    }
    function productplace(e) {
        setproduct({
            name: product.name,
            price: product.price,
            city: e.target.value,
            Stock: product.Stock
        });
    }
    function available(e) {
        setproduct({
            name: product.name,
            price: product.price,
            city: product.city,
            Stock: e.target.checked
        });
    }

    function handlebuttonclick() {
        console.log(product)
    }

    return (
        <div className="container-fluid d-flex justify-content-center ">
            <div className=" justify-content-center border m-3 w-25 bg-body-secondary p-3">
                <h2>Register Product</h2>
                <dl>
                    <dt>Product Name</dt>
                    <dd><input type="text" value={product.name} onChange={ProductNameCng} /></dd>
                    <dt>Price</dt>
                    <dd><input type="text" value={product.price} onChange={productpricecng} /></dd>
                    <dt>City</dt>
                    <dd>
                        <select value={product.city} onChange={productplace}>
                            <option>select your city</option>
                            <option>Delhi</option>
                            <option>Odisha</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd><input type="checkbox" checked={product.Stock} onChange={available} /><label>Available</label></dd>

                </dl>
                <button className="btn btn-dark w-100" onClick={handlebuttonclick}>Submit</button>
            </div>
        </div>

    );
}