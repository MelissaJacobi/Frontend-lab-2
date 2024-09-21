function ArtistDetails(props) {

    const { artistName, artistURL, artistActive, artistCountry } = props;

  return (
    <div className="app">
        <div className="artist_li">
            <div>
               <h2>{artistName}</h2>
                <img src={artistURL} alt={artistName} className="photo" /> 
            </div>
            <div>
              <h4>{artistActive}</h4>
            <h4>{artistCountry}</h4>  
            </div>
        </div>
        
    </div>
  );
}

export default ArtistDetails;