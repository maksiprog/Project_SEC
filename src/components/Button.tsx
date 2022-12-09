import type { PressableProps } from "react-native";
import { View, Text, Pressable } from "react-native";
import type { ReactNode } from "react";
import React from "react";

interface Props extends PressableProps {
  variant?: "AirBnb" | "dark" | "light";
  styles?: string;
  children: ReactNode;
}

export const Button = ({
  variant = "dark",
  children,
  styles = "",
  ...props
}: Props) => {
  let style = "";
  let textStyle = "text-base font-bold px-10 py-3";
  let textColorVariant = "";

  switch (variant) {
    case "AirBnb":
      style =
        "w-full bg-black outline-none rounded-t-lg rounded-b-lg touch-manipulation no-underline";
      textColorVariant = "text-white";
      break;
    case "light":
      style = "bg-neutral-200";
      textColorVariant = "text-black";
      break;
    case "dark":
      style = "bg-black";
      textColorVariant = "text-white";
      break;
  }

  const box =
    "inline-flex items-center border border-transparent rounded-md shadow-sm";
  const classNames = `${styles} ${box} ${style}`;
  const textClassNames = `${textStyle} ${textColorVariant}`;

  return (
    <Pressable {...props}>
      {({ pressed }) => {
        let activeClassNames = "";
        if (pressed) {
          switch (variant) {
            case "AirBnb":
              activeClassNames = "bg-neutral-800";
              break;
            case "light":
              activeClassNames = "bg-neutral-100";
              break;
            case "dark":
              activeClassNames = "bg-red-700";
              break;
          }
        }

        const pressedClassNames = `${classNames} ${activeClassNames}`;

        return (
          <View className={pressedClassNames}>
            <Text className={textClassNames}>{children}</Text>
          </View>
        );
      }}
    </Pressable>
  );
};
