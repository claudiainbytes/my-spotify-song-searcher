interface TrackProps {
    trackId: string;
}

const Player = ({ trackId } : TrackProps ): JSX.Element => { 

    const trackSrc = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`

    return(
        <>
            <iframe
                                style={{ borderRadius: 12 }}
                                src={trackSrc}
                                width="100%"
                                height={152}
                                frameBorder={0}
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
            />
        </>
    )  
}

export default Player