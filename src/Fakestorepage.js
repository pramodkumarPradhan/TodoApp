import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./Fakestore/Fakestorehome";
import { Product } from "./Fakestore/FakestoreProduct";
import { Details } from "./Fakestore/FakestaoreDetails";


export function Fakestore() {

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <nav >
                    <div className="border border-2 p-3 text-center mt-3 bg-danger text-white">
                        <h2>Fake Store</h2>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<FakestoreHome />} />
                    <Route path="products/:category" element={<Product />} />
                    <Route path='details/:id' element={<Details/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}