import { Link } from "react-router";
import Rating from "./Rating";
function MovieCard({
  movie: { id, title, poster_path, vote_average, release_date },
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className="shrink-0 min-w-40 max-w-48 snap-center">
        <Link to={`/details/${id}`}>
          <div className="card">
            <div className="image relative">
              <img
                className="rounded-lg mb-4"
                src={imagePath + poster_path}
                alt={title}
                width={800}
                height={900}
              ></img>
              <Rating rateNumber={vote_average * 10} />
            </div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p>{release_date}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
