import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (
        await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(() => {
      getMovies();
    }, []);
    return (
      <div className={style.container}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={style.movies}>
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        )}
      </div>
    );
}

export default Home;