import React from "react";
import { Text } from "react-native";

interface CustomTextProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body";
  dark?: boolean;
}

export default function CustomText({
  children,
  variant = "body",
  dark = false,
}: CustomTextProps) {
  const variants = {
    title: "text-xl font-bold",
    subtitle: "text-sm",
    body: "text-base",
  };

  const color = dark ? "text-white" : "text-black";

  return (
    <Text className={`${variants[variant]} ${color}`}>{children}</Text>
  );
}
