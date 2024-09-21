import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';
import Header from './components/Header'

function App() {

  const artistStats = artists.map(artist => <ArtistDetails key={artist.name} artistName={artist.name} artistURL={artist.photo_url} artistActive={artist.years_active} artistCountry={artist.country}/>)

  return (
    <div className="app">
      <Header />
      {artistStats}
    </div>
  );
}

export default App;
