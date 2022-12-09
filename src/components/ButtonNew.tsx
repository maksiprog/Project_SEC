import React from "react";
import { Text } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonNew = ({ text, variant }) => {
  let textColorVariant = "";

  switch (variant) {
    case "white":
      textColorVariant = "text-black";
      break;
    case "black":
      textColorVariant = "text-white";
      break;
  }

  const box = "text-base font-bold px-10 py-3 text-center";
  const classNames = `${box} ${textColorVariant}`;

  return (
    <BlurView intensity={42} className="overflow-hidden rounded-md">
      <LinearGradient
        className="items-center rounded-md"
        colors={
          variant == "black"
            ? [
                "rgba(48, 50, 52, 0.8)",
                "rgba(34, 34, 34, 0.8)",
                "rgba(17, 17, 17, 0.8)",
              ]
            : [
                "rgba(231, 231, 231, 0.8)",
                "rgba(224, 224, 224, 0.8)",
                "rgba(192, 197, 206, 0.8)",
              ]
        }
      >
        <Text className={classNames}>{text}</Text>
      </LinearGradient>
    </BlurView>
  );
};
