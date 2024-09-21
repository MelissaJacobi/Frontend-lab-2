function ArtistDetails(props) {
    const { artistName, artistURL } = props;

  return (
    <div className="app">
        <h2>{artistName}</h2>
        <img src={artistURL} alt={artistName} className="photo" />
        
    </div>
  );
}

export default ArtistDetails;