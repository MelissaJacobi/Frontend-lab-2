import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  const artistStats = artists.map(artist => <ArtistDetails key={artist.name} artistName={artist.name} artistURL={artist.photo_url} artistActive={artist.years_active} artistCountry={artist.country}/>)

  return (
    <h1>Best Selling Music Artists</h1>
  );
}

export default App;