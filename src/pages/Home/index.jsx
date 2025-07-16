import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "../../components/Home/Landing";
import MovieSlide from "../../components/sliders/MovieSlide";
import { fetchMovies } from "../../RTK/reducers/popularMoviesSlice";
import { fetchTopratedMovies } from "../../RTK/reducers/topRatedMoviesSlice";
import MovieSection from "../../components/sections/MovieSection";

function Home() {
  const popular = useSelector((state) => state.popular);
  const toprated = useSelector((state) => state.toprated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchTopratedMovies());
  }, []);

  return (
    <>
      <Landing />
      <MovieSlide movies={popular.results} title="Popular" />

      <MovieSection movies={toprated.results} title="Top Rated" />
    </>
  );
}

export default Home;
