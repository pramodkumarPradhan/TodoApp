import { useParams } from "react-router-dom"

export function Params() {
    let params = useParams();
    return (
        <div>
            <h1 className="text-danger">Hello!</h1>
            <h3>You Search For {params.brand} in {params.category} category {params.Product} section</h3>
        </div>
    )
}