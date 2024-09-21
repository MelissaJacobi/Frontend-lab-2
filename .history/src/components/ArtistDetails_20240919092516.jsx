import { artists } from "../best-selling-music-artists";

function ArtistDetails() {
  return (
    <div className="app">
      {artists.map((artist) => (
        <div key={artist.id} className="artist_details"> {/* Use a unique key here */}
          <div className="years_active">{artist.years_active}</div>
          <div className="country">{artist.country}</div>
        </div>
      ))}
    </div>
  );
}

export default ArtistDetails;