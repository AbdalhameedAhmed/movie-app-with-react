import { useSelector } from "react-redux";
import MovieCard from "../../components/cards/MovieCard";
function WatchLater() {
  const data = useSelector((state) => state.watchLater);
  return (
    <div className="container py-12 mx-auto">
      <h1 className="text-4xl font-bold mx-auto text-center">Watch Later</h1>
      {data.map((branchData, ind) => {
        return (
          <>
            {branchData.content.length ? (
              <>
                <h2 className="mt-24 mb-8 text-4xl font-bold" key={ind}>
                  {branchData.branchName}
                </h2>
                <div className="relative snap-x flex snap-mandatory  w-ful gap-16 h-fit overflow-x-auto">
                  {branchData.content.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
}

export default WatchLater;
