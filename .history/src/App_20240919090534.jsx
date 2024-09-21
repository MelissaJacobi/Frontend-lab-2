import { artists } from './best-selling-music-artists';

function App() {
  return (
    <div className="app">
      {artists.map((artist) => (
        <div key={artist.name} className="artist">
          <img src={artist.photo_url} alt={artist.name} />
          <h2>{artist.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
