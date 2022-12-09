import * as React from "react";
import { View, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const VideoComponent = ({ url }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View className="bg-blackr">
      <Video
        className="w-full h-full"
        ref={video}
        source={{
          uri: url,
        }}
        useNativeControls
        resizeMode="stretch"
        isMuted
        shouldPlay
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

export default VideoComponent;
