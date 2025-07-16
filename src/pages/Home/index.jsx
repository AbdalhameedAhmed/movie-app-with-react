import { useEffect } from "react";
import { fetchMovies } from "../../RTK/reduccers/popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Landing from "../../components/Home/Landing";
import MovieSlide from "../../components/sliders/MovieSlide";

function Home() {
  const popular = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <Landing />
      <MovieSlide movies={popular.results} title="Popular" />
    </>
  );
}

export default Home;
