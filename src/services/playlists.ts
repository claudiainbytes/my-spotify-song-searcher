import axios from 'axios'

const baseUrl: string = 'https://api.spotify.com/v1/playlists/5iwkYfnHAGMEFLiHFFGnP4'

let token: string = '';

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

const setToken = (newToken: string): void => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
    const config = {
        headers: { Authorization: token }
    }
    try {
        const response = await axios.get<any>(baseUrl, config);
        const tracks: Track[] = response.data.tracks.items.map( item => ({
                id: item.track.id,
                song: item.track.name,
                href: item.track.href,
                artist: item.track.artists[0].name,
                album: item.track.album.name,
                img: item.track.album.images[2].url,
                popularity: item.track.popularity,
                external_url: item.track.external_urls.spotify,
                preview_url: item.track.preview_url,
                duration_ms: item.track.duration_ms
        }))
        return tracks;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error en la solicitud:', error.message);
        } else {
            console.error('Error inesperado:', error);
        }
    }
}

export default { setToken, getAll }