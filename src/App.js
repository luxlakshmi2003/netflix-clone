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
  <button
  className="profile-btn"
  onClick={() => setShowHome(false)}
>
  👤
</button>



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

          <div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" alt="Inception" />
</div>

<div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg" alt="Oppenheimer" />
</div>

<div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" alt="Dune" />
</div>

<div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/q719jXXEzOoYaps6babgKnONONX.jpg" alt="John Wick" />
</div>
<div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="Joker" />
</div>

<div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/q719jXXEzOoYaps6babgKnONONX.jpg" alt="John Wick" />
</div>

<div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" alt="Dune" />
</div>

<div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg" alt="Oppenheimer" />
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

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w300/q719jXXEzOoYaps6babgKnONONX.jpg" alt="John Wick" />
  </div>

  <div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg" alt="Oppenheimer" />
</div>

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" alt="Batman Begins" />
  </div>

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" alt="Thor Ragnarok" />
  </div>










        </div>

        <h2>Comedy Movies</h2>

        <div className="movie-row">
          <div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg" alt="Frozen II" />
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
          <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" alt="Thor Ragnarok" />
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

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w300/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg" alt="Jumanji" />
  </div>

  <div className="movie-card">
  <img src="https://image.tmdb.org/t/p/w300/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg" alt="Frozen" />
</div>

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w300/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Deadpool" />
  </div>

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w300/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg" alt="Ted" />
  </div>




        </div>

      </div>

    </div>
  );
}

export default App;