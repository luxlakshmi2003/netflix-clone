import { useState } from "react";
import "./App.css";

function App() {

  const [showHome, setShowHome] = useState(false);

  if (!showHome) {
    return (
      <div className="profile-screen">

        <h1 className="logo">NETFLIX</h1>

        <h2>Who's Watching?</h2>

        <div className="profiles">

          <div
            className="profile"
            onClick={() => setShowHome(true)}
          >
            👩
            <p>Lakshmi</p>
          </div>

          <div
            className="profile"
            onClick={() => setShowHome(true)}
          >
            👩
            <p>Lachu</p>
          </div>

        </div>

      </div>
    );
  }

  return (
    <div>

      <div className="navbar">
        <h1 className="logo">NETFLIX</h1>
<input
    type="text"
    placeholder="🔍 Search movies..."
    className="search-bar"
  />



      </div>

      <div className="banner" style={{ backgroundImage: `url(/images/stranger.jpg)` }}>
        <div>
          <h1>Stranger Things</h1>

          <p>
            When a young boy vanishes, a small town uncovers a mystery
            involving secret experiments and supernatural forces.
          </p>

          <button>▶ Play</button>
          <button>ℹ More Info</button>
        </div>
      </div>

      <div className="movies">

        <h2>Trending Now</h2>

        <div className="movie-row">
          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg" alt="Avatar" />
          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="Joker" />
          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" alt="The Dark Knight" />

          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar" />
          </div>
        </div>

        <h2>Action Movies</h2>

        <div className="movie-row">
          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" alt="Avengers Endgame" />
          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/rweIrveL43TaxUN0akQEaAXL6x0.jpg" alt="Spider-Man" />
          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="Infinity War" />

          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/6ELCZlTA5lGUops70hKdB83WJxH.jpg" alt="Black Panther" />
          </div>
        </div>

        <h2>Comedy Movies</h2>

        <div className="movie-row">
          <div className="movie-card">
           <img src="https://picsum.photos/220/320?13" alt="movie" />
          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg" alt="Home Alone" />
          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/hziiv14OpD73u9gAak4XDDfBKa2.jpg" alt="The Hangover" />
          </div>

          <div className="movie-card">
            <img src="https://image.tmdb.org/t/p/w300/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg" alt="Toy Story" />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;