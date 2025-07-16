import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingleMovies } from "../../RTK/reducers/singleMovieSlice";
import DetailsCard from "../../components/cards/DetailsCard";

export default function Details() {
  let params = useParams();

  let data = useSelector((state) => state.singleMovie);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleMovies(params.movieId));
  }, []);

  return data.title ? <DetailsCard movie={data} /> : <h2>Loading...</h2>;
}
