import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import { Button } from "./Button";

storiesOf("Hans", module)
  .addDecorator((fn) => <>{fn()}</>)
  .add("Button", () => (
    <View className="p-4">
      <Button>No variant</Button>
    </View>
  ))
  .add("Variants", () => (
    <View className="p-4">
      <Button variant="dark" styles="mb-4">
        Dark
      </Button>
      <Button variant="light" styles="mb-4">
        Light
      </Button>
      <Button>no variant</Button>
    </View>
  ));
