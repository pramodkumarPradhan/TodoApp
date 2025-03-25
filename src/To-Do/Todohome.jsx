import { Link } from "react-router-dom";

export function Todohome() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '600px' }}>
            <Link to={'login'} className="btn btn-primary  mx-2" style={{width:'250px'}}>Login</Link>
            <Link to={'register'} className="btn btn-light " style={{width:'250px'}}>register</Link>
        </div>
    )
}