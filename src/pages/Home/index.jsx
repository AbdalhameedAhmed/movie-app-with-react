import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "../../components/Home/Landing";
import MovieSlide from "../../components/sliders/MovieSlide";
import { fetchMovies } from "../../RTK/reducers/popularMoviesSlice";
import { fetchTopratedMovies } from "../../RTK/reducers/topRatedMoviesSlice";
import { fetchtrendingMovies } from "../..//RTK/reducers/trendingMoviesSlice";
import { fetchTvPopularMovies } from "../..//RTK/reducers/tvPopularMoviesSlice";

import MovieSection from "../../components/sections/MovieSection";

function Home() {
  const popular = useSelector((state) => state.popular);
  const toprated = useSelector((state) => state.toprated);
  const trending = useSelector((state) => state.trending);
  const tvPopular = useSelector((state) => state.tvPopular);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchTopratedMovies());
    dispatch(fetchtrendingMovies());
    dispatch(fetchTvPopularMovies());
  }, []);

  return (
    <>
      <Landing />
      <MovieSlide movies={popular.results} title="Popular" />
      <MovieSection movies={toprated.results} title="Top Rated" />
      <MovieSection movies={trending.results} title="Trending" />
      <MovieSection movies={tvPopular.results} title="Tv Popular" />
    </>
  );
}

export default Home;
