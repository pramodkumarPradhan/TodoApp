import { useEffect, useState } from "react"
import { Grid } from "../../Controlled-components/dynamic-grid"
export function ConditionalRender() {

    const [product] = useState([{ Item: 'Mobile', Name: 'realme', Price: '18000' }, { Item: 'Mobile', Name: 'Iphone', Price: '38000' }])
    const [fields, setfield] = useState([]);
    const [layout, setlayout] = useState('');

    useEffect(() => {
        setfield(
            Object.keys(product[0])
        )
    }, [])
    function handlelayoutchange(e) {
        setlayout(e.target.value)
    }
    return (
        <div className="container-fluid text-center mt-5">
            <h3>Conditonal Rendering</h3>
            <div>
                <h4>Choose style:</h4>
                <div className="d-flex justify-content-center mt-4">
                    <select onChange={handlelayoutchange} className="form-select w-25 d-flex justify-content-center">
                        <option>Select Format</option>
                        <option value="Card">Card</option>
                        <option value="Table">Table</option>
                    </select>
                </div>
            </div>
            <Grid layout={layout} fields={fields} caption={'Testing'} products={product}/>
        </div>
    )
}