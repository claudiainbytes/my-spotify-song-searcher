interface PlayLinkProps {
    trackId: string;
    children: React.ReactElement;
    handleClick: (id: string) => void;
}

const PlayLink = ({ trackId, children, handleClick } : PlayLinkProps ): JSX.Element => { 
    return(
            <a href="#" onClick={() => handleClick(trackId) }>
            {children}  
            </a>
    )  
}

export default PlayLink