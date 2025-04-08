import { getMovieCastAction } from "@/core/actions/movie/get-cast-movie";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castMovieQuery = useQuery({
    queryKey: ["movie", "cast", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
    castMovieQuery,
  };
};
