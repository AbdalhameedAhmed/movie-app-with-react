import MovieCard from "../cards/MovieCard";

export default function MovieSlide({ movies, title }) {
  function scrollLeft() {
    const scrollSection = document.querySelector("#scroll");
    scrollSection.scrollLeft -= 200;
  }
  function scrollRight() {
    const scrollSection = document.querySelector("#scroll");
    scrollSection.scrollLeft += 200;
  }
  return (
    <div className="container mx-auto my-12 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold ">{title}:</h2>
        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer"
            onClick={() => {
              scrollLeft();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => {
              scrollRight();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className="snap-x flex snap-mandatory scroll-smooth w-ful gap-16 overflow-x-hidden"
          id="scroll"
        >
          {movies ? (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <h2>loding....</h2>
          )}
        </div>
      </div>
    </div>
  );
}
