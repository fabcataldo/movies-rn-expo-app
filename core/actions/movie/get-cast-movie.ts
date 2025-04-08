import { CreditsResponse } from "@/infrastructure/interfaces/credits.response";
import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (
  movieId: number | string
): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);
    return data.cast.map((c) => CastMapper.fromMovieDBCastToEntity(c));
  } catch (error) {
    console.log(error);
    throw "Cannot load movie cast data";
  }
};
