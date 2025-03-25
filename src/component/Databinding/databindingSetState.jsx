import { useEffect, useState } from "react";

export function Data() {
    var [getproduct, setproduct] = useState("tv");
    var [getvalue, setvalue] = useState("0");

    useEffect(() => {
        setproduct("sony");
        setvalue("30000/-");
    }, [])
    return (
        <div className="container-fluid">
            <h3>Search For A Best TV</h3>
            <p>
                <div>Best tv:{getproduct}</div>
                value:{getvalue}
            </p>
        </div>
     );
}