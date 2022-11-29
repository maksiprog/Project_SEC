import React from "react";
import { View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { width, height } = Dimensions.get("window");

const styles = {
  image: {
    width,
    height,
  },
};

export const TestingScreen = () => {
  return (
    <View className=" flex-1">
      <Image
        source={require("./images/bg.jpg")}
        className="bg-transparent absolute"
      />
      <Swiper
        dot={<View className="w-2 h-2 bg-slate-700 rounded-md mx-2 bottom-5" />}
        activeDot={
          <View className="w-2 h-2 bg-white rounded-md mx-2 bottom-5" />
        }
        loop={false}
      >
        <View className=" flex-1 bg-transparent">
          <Image style={styles.image} source={require("./images/1.jpeg")} />
        </View>
        <View className=" flex-1 bg-transparent">
          <Image style={styles.image} source={require("./images/2.jpeg")} />
        </View>
        <View className=" flex-1 bg-transparent">
          <Image style={styles.image} source={require("./images/3.jpeg")} />
        </View>
      </Swiper>
    </View>
  );
};
