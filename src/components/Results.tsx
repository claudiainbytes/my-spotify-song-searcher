import PlayLink from './PlayLink'
interface ResultsProps {
    tracks: [];
    handleClick: () => void
}

const Results = ({ tracks, handleClick }: ResultsProps): JSX.Element => {

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
                <div className="row mt-3 mb-2">
                    <div className="col-12 col-lg-4">
                        <h5>Song</h5>
                    </div>
                    <div className="col-12 col-lg-5 d-none d-lg-block">
                        <h5>Album</h5>
                    </div>
                    <div className="col-12 col-lg-2  d-none d-lg-block">
                        <h5>Duration</h5>
                    </div>
                    <div className="col-12 col-lg-1  d-none d-lg-block">
                        <h5>Action</h5>
                    </div>
                </div>
                { tracks.map( item => 
                <div className="row" key={item.id}>
                    <div className="col-12 col-lg-4">
                        <div className="song-card py-2">
                            <div className="song-card_left">
                                <img src={item.img} className="rounded float-start" alt={item.song}/>
                            </div>
                            <div className="song-card_right">
                                <h6>{item.song}</h6>
                                <p><small>{item.artist}</small></p>
                                <PlayLink trackId={item.id} handleClick={handleClick}>
                                    <h6 className="d-block d-lg-none"><span className="badge bg-success">Play</span></h6>
                                </PlayLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-none d-lg-flex flex-column align-items-start justify-content-center">
                        <h6>{item.album}</h6>
                    </div>
                    <div className="col-12 col-lg-2 d-none d-lg-flex flex-column align-items-start justify-content-center">
                        <h6>{convertMsToMinutesAndSeconds(item.duration_ms)}</h6>
                    </div>
                    <div className="col-12 col-lg-1 d-none d-lg-block d-lg-flex flex-column align-items-center justify-content-center">
                        <PlayLink trackId={item.id} handleClick={handleClick}>
                            <h5 className="d-none d-lg-block"><span className="badge bg-success p-2">Play</span></h5>
                        </PlayLink>
                    </div>
                </div>
                )}
            </div>     
            <div className="col-12">
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
