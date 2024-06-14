import { useState, useEffect, useCallback } from 'react'
import playlistService from './services/playlists'
import loginService from './services/login'
import Searcher from './components/Searcher'
import Results from './components/Results'
import Player from './components/Player'

interface Track {
  id: number,
  song: string,
  href: string,
  artist: string,
  album: string,
  img: string,
  popularity: string,
  external_url: string,
  preview_url: string,
  duration_ms: string
}
interface Credential {
  grant_type: string,
  client_id: string,
  client_secret: string,
}

const credential: Credential = { 
  grant_type: "client_credentials",
  client_id: import.meta.env.VITE_SPOTIFY_USERNAME,
  client_secret: import.meta.env.VITE_SPOTIFY_PASSWORD
}

const App = () => {

  const [tracks, setTracks] = useState<Track[]>([])
  const [token, setToken] = useState('')
  
  useEffect(() => {
    if( token === '' ){
      loginService
        .login(credential)
        .then(response => {
            setToken(response.access_token)
        })
    } else {
      window.localStorage.setItem('loggedInSpotifyApp', JSON.stringify(token))
      playlistService.setToken(token)
      if(tracks.length === 0){
        playlistService
        .getAll()
        .then(tracks => {
          setTracks(tracks)
        })
      }
    }
  }, [token, tracks]) 

  return (
    <>
      <Player trackId="62fqMvguJbsSs9HKhhRfuS"/>
      <Searcher/>
      <Results tracks={tracks}/>
    </>
  )
}

export default App
//62fqMvguJbsSs9HKhhRfuS