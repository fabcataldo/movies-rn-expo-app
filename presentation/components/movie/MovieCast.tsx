import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { ActorCard } from "./ActorCard";
import { Cast } from "@/infrastructure/interfaces/cast.interface";

interface Props {
  cast: Cast[];
}
const MovieCast = ({ cast }: Props) => {
  return (
    <View>
      <Text className="font-bold mt-5 text-2xl mx-5 mb-2">Actores</Text>
      <FlatList
        horizontal
        data={cast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
