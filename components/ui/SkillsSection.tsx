import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function SkillsSection() {
  return (
    <View className="items-center justify-center p-4">
      <Text className="text-black text-xl font-bold mb-3">Skills</Text>

      <View className="flex-row space-x-6">
        {}
        <MaterialCommunityIcons name="blender-software" size={32} color="#F5792A" />
        {}
        <MaterialCommunityIcons name="language-python" size={32} color="#3776AB" />
        {}
        <MaterialCommunityIcons name="language-java" size={32} color="#F89820" />
      </View>
    </View>
  );
}
