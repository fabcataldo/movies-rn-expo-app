import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCast from "@/presentation/components/movie/MovieCast";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castMovieQuery } = useMovie(+id);

  if (
    movieQuery.isLoading ||
    !movieQuery.data ||
    castMovieQuery.isLoading ||
    !castMovieQuery.data
  ) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }
  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.title}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />

      <MovieCast cast={castMovieQuery.data} />
    </ScrollView>
  );
};

export default MovieScreen;
