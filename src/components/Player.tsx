import { useEffect } from 'react'
interface TrackProps {
    trackId: string;
}

const Player = ({ trackId } : TrackProps ): JSX.Element => { 
 
    useEffect(() => {
        if(trackId){
            window.onSpotifyIframeApiReady = (IFrameAPI) => {
                const element = document.getElementById('embed-iframe');
                const options = {
                    uri: `spotify:track:${trackId}`,
                    width: '100%',
                    height: '152',
                };
                if(element){
                    const callback = (EmbedController) => {
                        document.getElementById('playTrackButton').addEventListener('click', () => {
                            EmbedController.loadUri(document.getElementById('playTrackButton').dataset.spotifyId)
                            EmbedController.play()
                        });
                    };
                    IFrameAPI.createController(element, options, callback);
                } 
            }
            document.getElementById('playTrackButton')?.click()
        }         
    },[trackId])

    return(
           <>
            <div className="spotify-embed-iframe">
                <button type="button" id="playTrackButton" className="d-none" data-spotify-id={`spotify:track:${trackId}`}>Click {trackId}</button>
                <div id="embed-iframe"></div>
            </div>   
           </>
    )
    
}

export default Player