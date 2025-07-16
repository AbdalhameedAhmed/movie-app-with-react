import MainButton from "../buttons/MainButton";
import Rating from "./Rating";

function DetailsCard({ movie }) {
  const {
    backdrop_path,
    release_date,
    genres,
    poster_path,
    spoken_languages,
    tagline,
    title,
    overview,
    vote_average,
    homepage,
  } = movie;
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div
        className="details py-24 px-12 relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-slate-900/75 before:z-0"
        style={{
          backgroundImage: `url(${imagePath + backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container p-0 h-full">
          <div className="info relative w-full h-full flex flex-col gap-4 items-center md:flex-row md:items-start">
            <div className="image relative  md:flex-none">
              <img
                className="rounded-lg"
                src={imagePath + poster_path}
                alt={title + "image"}
                width={300}
                height={450}
              />
              <Rating rateNumber={vote_average * 10} />
            </div>
            <div className="text text-white md:pl-8 lg:pl-12">
              <h1 className="text-5xl mb-4">{title}</h1>
              <p className="z-10 relative mb-2">
                <span className="text-lg font-bold">{release_date} </span>
                {genres.map(
                  (ele, index) =>
                    ele.name + (index == genres.length - 1 ? "" : ", ")
                )}
              </p>
              <p className="mb-4">
                <span className="text-lg font-bold">
                  Available languages :{" "}
                </span>
                {spoken_languages.map(
                  (ele, index) =>
                    ele.name +
                    (index == spoken_languages.length - 1 ? "" : ", ")
                )}
              </p>
              <p className="text-gray-400 font-bold text-lg mb-8">{tagline}</p>
              <p className="text-2xl font-bold mb-2">overview:</p>
              <p className="text-lg font-bold mb-16">{overview}</p>
              <div className="buttons flex h-12 justify-center items-center gap-8">
                <MainButton title="Watch Now" link={homepage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
