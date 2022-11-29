import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
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
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
  },
});
