import { useState } from 'react'
import PaginationComponent from './PaginationComponent'
import PlayLink from './PlayLink'
interface ResultsProps {
    tracks: [];
    handleClick: () => void
}

const Results = ({ tracks, handleClick }: ResultsProps): JSX.Element => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const convertMsToMinutesAndSeconds = ms => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds}`;
  };

  const totalItems = tracks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tracks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                { currentItems.map( item => 
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
                    <PaginationComponent
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div> 
        </div>
    </>
  )  
}

export default Results
