import { useState, useEffect } from 'react'
import playlistService from './services/playlists'
import loginService from './services/login'
import Searcher from './components/Searcher'
import Results from './components/Results'
import Player from './components/Player'

interface Track {
  id: string;
  song: string;
  href: string;
  artist: string;
  album: string;
  img: string;
  popularity: string;
  external_url: string;
  preview_url: string;
  duration_ms: string
}
interface Credential {
  grant_type: string;
  client_id: string;
  client_secret: string
}

const credential: Credential = { 
  grant_type: "client_credentials",
  client_id: import.meta.env.VITE_SPOTIFY_USERNAME,
  client_secret: import.meta.env.VITE_SPOTIFY_PASSWORD
}

const App = () => {

  const [tracks, setTracks] = useState<Track[]>([])
  const [token, setToken] = useState('')
  const [track, setTrack] = useState(null)
  const [filterByTerm, setFilterByTerm] = useState('')
  
  useEffect(() => {
    if( token === '' ){
      loginService
        .login(credential)
        .then(response => {
            setToken(response.access_token)
        })
    } else {
      //window.localStorage.setItem('loggedInSpotifyApp', JSON.stringify(token))
      playlistService.setToken(token)
      if(tracks.length === 0){
        playlistService
          .getAll()
          .then(tracks => {
            setTracks(tracks)
            setTrack(tracks[0])
          })
      }
    }
  }, [token, tracks]) 

  const handleClick = (e: React.MouseEventHandler<HTMLAnchorElement>, trackId: string) => {
    e.preventDefault()
    const track = tracks.find(item => item.id === trackId)
    setTrack(track)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setFilterByTerm(term.toLowerCase())
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.getElementById('searchByTerm').value = ''
    setFilterByTerm('')
  }

  const filteredTracks = (filterByTerm.trim().length === 0 || filterByTerm.trim() === '') ? tracks : tracks.filter((track) => track.song.toLowerCase().includes(filterByTerm) )

  return (
    <>
    { track !== null && (
      <Player trackId={track.id}/>
    )}
      <Searcher handleChange={handleChange} handleReset={handleReset}/>
      <Results tracks={filteredTracks} handleClick={handleClick} />
    </>
  )
}

export default App