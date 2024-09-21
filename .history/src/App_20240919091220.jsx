import { artists } from './best-selling-music-artists';

function App() {
  return (
    <div className="app">
      
        {artists.map((artist) => (
          <div className="artist_li">
            <div key={artist.name} className="artist">
              <img src={artist.photo_url} alt={artist.name} className="photo" />
              <h2>{artist.name}</h2>
            </div>
          </div>
        ))}
      
      
    </div>
  );
}

export default App;
