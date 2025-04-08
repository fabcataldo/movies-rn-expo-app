import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  //gestor de estados de data de nowplaying
  //guarda un montón de info de esta query
  //la data en si, si esta cargando, si no, etc.
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-10 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Populares"
          className="mb-5"
        />

        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title="Mejor Calificadas"
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Próximamente"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
