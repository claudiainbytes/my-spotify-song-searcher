import React from 'react'
interface SearcherProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleReset: () => void;
}

const Searcher = ({ handleChange, handleReset } : SearcherProps ): JSX.Element => { 
  return(
    <>
        <div className="row">
            <div className="col-12">
                <h1 className="my-3">Spotify Song Searcher</h1>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="searchByTerm" className="form-label">Search by:</label>
                            <div className="input-group">
                                <input type="text" 
                                    className="form-control" 
                                    id="searchByTerm" 
                                    aria-describedby="searchByTermHelp" 
                                    placeholder=""
                                    onChange={handleChange}
                                    />
                                <button className="btn btn-primary" type="button" id="reset" onClick={handleReset}>Reset</button>
                            </div>
                            <small id="searchByTermHelp" 
                                   className="form-text text-muted">
                                   Write the song that you would like to listen to.
                            </small>
                        </div>
                    </fieldset>
                </form>
            </div>    
        </div>
    </>
  )  
}

export default Searcher
