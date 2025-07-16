import { useEffect } from "react";
import { fetchMovies } from "../../RTK/reduccers/popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Landing from "../../components/Home/Landing";

function Home() {
  const popular = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <Landing />
    </>
  );
}

export default Home;
