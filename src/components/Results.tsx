const Results = () => { 
  return(
    <>
        <div className="row">
            <div className="col-12">
                <hr className="mt-3 mb-4"/>  
                <h4>Results</h4>
            </div>
            <div className="col-12">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-active">
                        <th scope="row">Active</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        </tr>
                        <tr>
                        <th scope="row">Default</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        </tr>
                        <tr className="table-dark">
                        <th scope="row">Dark</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-center my-4">
                    <ul className="pagination pagination-md">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">&laquo;</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">4</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">5</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">&raquo;</a>
                        </li>
                    </ul>
                </div>
            </div>      
        </div>
    </>
  )  
}

export default Results
