import { artists } from './best-selling-music-artists';

function App() {
  return (
    <div className="app">
      <div className="artist_li">
        {artists.map((artist) => (
          <div key={artist.name} className="artist">
            <img src={artist.photo_url} alt={artist.name} className="photo" />
            <h2>{artist.name}</h2>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
