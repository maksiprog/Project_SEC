import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  name: any;
  size: any;
  backgroundColor?: string;
  border?: boolean;
  borderColor?: string;
  iconColor?: string;
  packageLibrary?: string;
};

export const MoshIcon = ({
  name,
  size = 40,
  backgroundColor = "transparent",
  iconColor = "#000",
  borderColor = "#d4d4d4",
  border = true,
  packageLibrary = "material",
}: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: border ? 1 : 0,
      }}
    >
      {packageLibrary == "material" ? (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      ) : (
        <FontAwesome name={name} color={iconColor} size={size * 0.5} />
      )}
    </View>
  );
};

export default MoshIcon;
