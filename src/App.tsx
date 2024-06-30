import React, { useState, useEffect } from 'react'
import playlistService from './services/playlists'
import loginService from './services/login'
import Searcher from './components/Searcher'
import Results from './components/Results'
import Player from './components/Player'
import Footer from './components/Footer'

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
  duration_ms: string;
  uri: string;
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
  const [track, setTrack] = useState<any>(null)
  const [filterByTerm, setFilterByTerm] = useState('')
  
  useEffect(() => {
    if( token === '' ){
      loginService
        .login(credential)
        .then(response => {
            setToken(response.access_token)
        })
    } else {
      playlistService.setToken(token)
      if(tracks.length === 0){
        playlistService
          .getAll()
          .then(( tracks: any ) => {
            setTracks(tracks)
            setTrack(tracks[Math.floor(Math.random() * tracks.length)])
          })
      }
    }
  }, [token, tracks]) 

  const handleClick = (trackId: string) => {
    const track: any = tracks.find(item => item.id === trackId)
    setTrack(track)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setFilterByTerm(term.toLowerCase())
  }

  const handleReset = () => {
    (document.getElementById('searchByTerm') as HTMLInputElement).value = ''
    setFilterByTerm('')
  }

  const filteredTracks: any = (filterByTerm.trim().length === 0 || filterByTerm.trim() === '') ? tracks : tracks.filter((track) => track.song.toLowerCase().includes(filterByTerm) )
  
  if(tracks.length === 0 ){
    return(<h6>Loading...</h6>)
  }
  else {
    return (
      <>
        { track !== null && (
          <Player trackId={track.id}/>
        )}
        <Searcher handleChange={handleChange} handleReset={handleReset}/>
        <Results filteredTracks={filteredTracks} handleClick={handleClick} />
        <Footer />
      </>
    )
  }
}

export default App