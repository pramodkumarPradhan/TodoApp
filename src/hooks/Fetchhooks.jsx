import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch(url).then(response=>response.json()).then(item=>setdata(item))
    })
    return data;
} 
