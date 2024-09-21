import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {
  return (
    <div className="app">
      
        {artists.map((artist) => (
          <div className="artist_li">
            <div key={artist.name} className="artist">
              <img src={artist.photo_url} alt={artist.name} className="photo" />
              <h2>{artist.name}</h2>
              <div>
                <ArtistDetails />
              </div>
            </div>
          </div>
        ))}
      
      
    </div>
  );
}

export default App;
