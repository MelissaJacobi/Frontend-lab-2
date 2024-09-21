function ArtistDetails(props) {

    const { artistName, artistURL, artistActive, artistCountry } = props;

  return (
    <div className="app">
        <h2>{artistName}</h2>
        <img src={artistURL} alt={artistName} className="photo" />
        <h3>{artistActive}</h3>
        <h3>{artistCountry}</h3>
    </div>
  );
}

export default ArtistDetails;