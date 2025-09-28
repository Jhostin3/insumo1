import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import CustomText from "./CustomText";

interface ProfileDetailsProps {
  imageSource: ImageSourcePropType; 
  size?: number;                     
  name?: string;
  subtitle?: string;
}
export default function ProfileDetails({
  imageSource,
  size = 120,
  name,
  subtitle,
}: ProfileDetailsProps) {
  return (
    <View className="items-center justify-center p-3">
      <Image
        source={imageSource}
        style={{ width: size, height: size, borderRadius: size / 2 }}
        className="bg-gray-200 shadow"
      />
      {(name || subtitle) && (
        <View className="mt-2 items-center">
          {name ? <CustomText variant="title">{name}</CustomText> : null}
          {subtitle ? (
            <CustomText variant="subtitle" dark={false}>
              {subtitle}
            </CustomText>
          ) : null}
        </View>
      )}
    </View>
  );
}
