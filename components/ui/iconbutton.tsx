import React from "react";
import { Pressable } from "react-native";

interface IconButtonProps {
  icon: React.ReactNode;
  onPress: () => void;
  variant?: "light" | "dark";
}

const IconButton = ({ icon, onPress, variant = "light" }: IconButtonProps) => {
  const variantStyles =
    variant === "dark"
      ? "bg-gray-800"
      : "bg-gray-200";

  return (
    <Pressable
      onPress={onPress}
      className={`p-2 rounded-full items-center justify-center ${variantStyles}`}
    >
      {icon}
    </Pressable>
  );
};

export default IconButton;
