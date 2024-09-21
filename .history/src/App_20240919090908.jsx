import { artists } from './best-selling-music-artists';
import styles from './index.css'

function App() {
  return (
    <div className="app">
      {artists.map((artist) => (
        <div key={artist.name} className="artist">
          <img src={artist.photo_url} alt={artist.name} className="photo" />
          <h2>{artist.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
