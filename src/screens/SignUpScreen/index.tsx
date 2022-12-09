import * as React from "react";
import { View, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const SignUpScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View className="bg-blackr">
      <Video
        className="w-full h-full"
        ref={video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
