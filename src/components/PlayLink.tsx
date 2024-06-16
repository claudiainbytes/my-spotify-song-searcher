interface PlayLinkProps {
    trackId: string;
    children: React.ReactElement;
    handleClick: (event: React.MouseEventHandler<HTMLAnchorElement>, id: string) => void;
}

const PlayLink = ({ trackId, children, handleClick } : PlayLinkProps ): JSX.Element => { 
    return(
            <a href="#" onClick={(e) => handleClick( e, trackId) }>
            {children}  
            </a>
    )  
}

export default PlayLink