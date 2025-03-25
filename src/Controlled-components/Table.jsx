export function DataGrid(Props) {
    return (
        <div>
            <table className={`table table-hover caption-top ${Props.bgstyle}`}>
                <caption className="fs-2">{Props.Title}</caption>
                <thead>
                    <tr>
                        {
                            Props.Categorys.map(detail => <th key={detail}>{detail}<button className="btn bi bi-sort-alpha-down"></button></th>)
                        }
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Props.Products.map(Product =>
                            <tr>{
                                Object.keys(Product).map(data => <td>{Product[data]}</td>)
                            }
                                <td>
                                    <button className="btn btn-warning bi bi-pen  mx-2"></button>
                                    <button className="btn btn-danger bi bi-trash"></button>
                                </td>
                            </tr>
                        )

                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link">&laquo;</a></li>
                                <li className="page-item"><a className="page-link">1</a></li>
                                <li className="page-item"><a className="page-link">2</a></li>
                                <li className="page-item"><a className="page-link">3</a></li>
                                <li className="page-item"><a className="page-link">&raquo;</a></li>
                            </ul>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}