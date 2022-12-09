import React from "react";
import { View, Image, Dimensions } from "react-native";
import VideoComponent from "../../components/VideoComponent";
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
          <VideoComponent url="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
        </View>
        <View className=" flex-1 bg-transparent">
          <VideoComponent url="https://static.videezy.com/system/resources/previews/000/008/445/original/Dark_Haired_Girl_in_disbelief_1.mp4" />
        </View>
        <View className=" flex-1 bg-transparent">
          <VideoComponent url="https://static.videezy.com/system/resources/previews/000/019/708/original/winter2.mp4" />
        </View>
      </Swiper>
    </View>
  );
};
