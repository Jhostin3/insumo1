import React from "react";
import { Text, View } from "react-native";

export default function ExperienceSection() {
  return (
    <View className="w-full items-center mt-8">
      <View className="bg-black rounded-2xl p-5 w-11/12 shadow-lg">
        <Text className="text-white text-lg font-semibold mb-3 text-center">
          Experiencia
        </Text>
        <View className="bg-gray-900 rounded-xl p-4 mb-3">
          <Text className="text-white text-base font-medium">
            Desarollador de React Native
          </Text>
          <Text className="text-gray-400 text-sm mt-1"> 3 Dias Como desarollador </Text>
        </View>

        <View className="bg-gray-900 rounded-xl p-4">
          <Text className="text-white text-base font-medium">
            React Native Developer
          </Text>
          <Text className="text-gray-400 text-sm mt-1">3 Days as a Developer</Text>
        </View>
      </View>
    </View>
  );
}
