function ArtistDetails(props) {
    const { artistName } = props;
  return (
    <div className="app">
        <h2>{artistName}</h2>
        <img src={artist.photo_url} alt={artist.name} className="photo" />
        {/* <div key={artist.id} className="artist_details"> 
          <div className="years_active">{artist.years_active}</div>
          <div className="country">{artist.country}</div>
        </div> */}
    </div>
  );
}

export default ArtistDetails;