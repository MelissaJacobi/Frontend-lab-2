import { artists } from "../best-selling-music-artists";

function ArtistDetails() {
  return (
    <div className="app">
      
      {artists.map((artist) => (
            <div className="artist_details">
              <div className="years_active">{artist.years_active}</div>
              <div className="country">{artist.country}</div>
            </div>
        ))}
      
    </div>
  );
}

export default ArtistDetails;