const Searcher = () => { 
  return(
    <>
        <div className="row">
            <div className="col-12">
                <iframe
                    style={{ borderRadius: 12 }}
                    src="https://open.spotify.com/embed/track/62fqMvguJbsSs9HKhhRfuS?utm_source=generator&theme=0"
                    width="100%"
                    height={152}
                    frameBorder={0}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
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
                                    placeholder=""/>
                                <button className="btn btn-primary" type="submit" id="submit">Submit</button>
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
