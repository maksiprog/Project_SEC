import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <View className="flex flex-row w-full mb-4">
      <MaterialIcons name="error-outline" size={20} color="red" />
      <Text className="text-red-600 text-sm ml-1">{error}</Text>
    </View>
  );
};
