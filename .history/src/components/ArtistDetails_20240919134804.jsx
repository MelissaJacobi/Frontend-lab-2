function ArtistDetails(props) {

    const { artistName, artistURL, artistActive, artistCountry } = props;

  return (
    <div className="app">
        <div>
            <h2>{artistName}</h2>
            <img src={artistURL} alt={artistName} className="photo" />
            <h4>{artistActive}</h4>
            <h4>{artistCountry}</h4>
        </div>
        
    </div>
  );
}

export default ArtistDetails;