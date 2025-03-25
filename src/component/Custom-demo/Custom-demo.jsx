import { useState } from "react";
import { DataGrid } from "../../Controlled-components/Table";

export function Table() {
    const [Data] = useState([
        { Id: '1', Name: 'Iphone 11', Price: '40,000', Stock: 'true' },
        { Id: '2', Name: 'Realme 9 pro+', Price: '18,000', Stock: 'false' },
        { Id: '3', Name: 'Iphone 13', Price: '45,000', Stock: 'true' }
    ]);
    return (
        <div className="container-fluid mt-3">
            <h1 className="text-center">Table details</h1>
            <DataGrid Title="Eployee's Detail" Categorys={['Id', 'Name', 'Price', 'Stock']} Products={Data} />
            <DataGrid bgstyle='table-primary text-white' Title="Cricket Annalysis:" Categorys={['Batsman', 'Score', 'SR', 'Ranking']} Products={[{ Batsman: 'Virat Kohli', Score: 104, SR: 78, Ranking: 5 }, { Batsman: 'Rohit Sharma', Score: 154, SR: 95, Ranking: 3 }, { Batsman: 'Shubhman Gill', Score: 51, SR: 89, Ranking: 1 }]} />
        </div>
    )
}