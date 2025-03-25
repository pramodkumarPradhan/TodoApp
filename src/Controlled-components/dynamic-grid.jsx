export function Grid(Props) {
    if (Props.layout === "Card") {
        return (
            <div className="d-flex  justify-content-center">
                {
                    Props.products.map(product =>
                        <div className="card ms-5 mt-4  " style={{ width: "250px", height: '200px' }}>
                            <div className="card-header" style={{ height: "60px" }}>
                                <h3>
                                    {
                                        product[Object.keys(product)[0]]
                                    }
                                </h3>
                            </div>
                            <div className="card-body">
                                <div>
                                    {
                                        Object.keys(product)[1]
                                    }
                                    :
                                    {
                                        product[Object.keys(product)[1]]
                                    }
                                </div>
                                <div>
                                    {
                                        Object.keys(product)[2]
                                    }
                                    :
                                    {
                                        product[Object.keys(product)[2]]
                                    }
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-warning">View Details</button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
    else {
        return (
            <table className="table caption-top table-hover">
                <caption className="text-center fs-3">{Props.caption}</caption>
                <thead>
                    <tr>
                        {
                            Props.fields.map(field => <th>{field}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Props.products.map(record =>
                            <tr>
                                {
                                    Object.keys(record).map(key => <td>{record[key]}</td>)
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}