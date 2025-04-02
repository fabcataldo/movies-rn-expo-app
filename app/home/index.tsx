import { View, Text, ActivityIndicator } from "react-native";
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
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>

      <MainSlideshow movies={nowPlayingQuery.data ?? []} />

      <MovieHorizontalList movies={popularQuery.data ?? []} title="Populares" />

      <MovieHorizontalList
        movies={topRatedQuery.data ?? []}
        title="Mejor Calificadas"
      />

      <MovieHorizontalList
        movies={upcomingQuery.data ?? []}
        title="Próximamente"
      />
    </View>
  );
};

export default HomeScreen;
