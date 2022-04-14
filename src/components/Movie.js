import propTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import style from "./Movie.module.css";
import { useState } from "react";

function Movie({id, coverImg, title, summary, genres, rating}) {
  const [flag, setFlag] = useState(true);
  const onClick = () => {
    setFlag(!flag);
  };
    return (
      <div className={style.movie}>
        <img src={coverImg} alt="{title}" className={style.movie_img}/>
        <div className={style.movie_scripts}>
          <h2 className={style.movie_title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <ul className={style.movie_genres}>
            <span>Genres:</span>
            {genres.map(g => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <div className={style.movie_rating_stars}>
            <StarRatings 
              rating={rating/2}
              starRatedColor="rgb(247, 247, 5)"
              numberOfStars={5}
            />
            <span>({rating})</span>
          </div>
          <p 
            className={style.movie_summary}
            onClick={onClick}
          >
            {(flag && summary.length > 250) ? `${summary.slice(0, 250)} ...` : summary}
          </p>
        </div>
      </div>
    );

}

Movie.prototype = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    rating: propTypes.number,
}

export default Movie;