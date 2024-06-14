interface ResultsProps {
    tracks: []
}

const Results = ({ tracks }: { tracks: [] }): JSX.Element => {

  const convertMsToMinutesAndSeconds = ms => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds}`;
  };
  
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
                        <th scope="col">Song</th>
                        <th scope="col">Album</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Column heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tracks.map( item => 
                            <tr key={item.id}>
                                <th scope="row">
                                    {item.song} - {item.artist}
                                </th>
                                <th>{item.album}</th>
                                <th>{convertMsToMinutesAndSeconds(item.duration_ms)}</th>
                                <th><img src={item.img} className="rounded float-start" alt={item.song}/></th>
                            </tr>
                        )}
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
