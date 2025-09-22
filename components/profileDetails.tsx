import React from "react";
import { View, Text, Image } from "react-native";

export default function ProfileDetails(props) {
  const { imageSource, size = 120, name, subtitle } = props;

  return (
    <View className="items-center justify-center p-3">
      <Image
        source={imageSource}
        style={{ width: size, height: size, borderRadius: size / 2 }}
        className="bg-gray-200 shadow"
      />
      {(name || subtitle) && (
        <View className="mt-2 items-center">
          {name ? <Text className="text-base font-semibold">{name}</Text> : null}
          {subtitle ? (
            <Text className="text-sm text-gray-500">{subtitle}</Text>
          ) : null}
        </View>
      )}
    </View>
  );
}
