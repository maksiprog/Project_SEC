import React, { useMemo } from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { OnboardingSwiper } from "../../components/OnboardingSwiper";
import { PressableScale } from "../../components/HoverButton";
import { Routes } from "../../navigation/routes";
import { ButtonNew } from "../../components/ButtonNew";

export const OnboardingScreen = ({ navigation }: any) => {
  const navigateTo = (destination: string) => {
    navigation.navigate(destination);
  };

  return (
    <View className="items-center justify-center">
      <View className="flex flex-row items-center space-x-2 justify-around w-full">
        <OnboardingSwiper>
          <View className="absolute bottom-0 w-full">
            <View className="mb-20">
              <View className="flex flex-row justify-evenly">
                <View className="basis-2/5">
                  <PressableScale
                    animate={useMemo(
                      () => (interaction) => {
                        "worklet";

                        return {
                          opacity: interaction.pressed ? 0.95 : 1,
                        };
                      },
                      []
                    )}
                    onPress={() => navigateTo(Routes.LOGIN_SCREEN)}
                  >
                    <ButtonNew text="Sign up" variant="black" />
                  </PressableScale>
                </View>
                <View className="basis-2/5">
                  <PressableScale
                    animate={useMemo(
                      () => (interaction) => {
                        "worklet";

                        return {
                          opacity: interaction.pressed ? 0.95 : 1,
                        };
                      },
                      []
                    )}
                    onPress={() => navigateTo(Routes.LOGIN_SCREEN)}
                  >
                    <ButtonNew text="Sign in" variant="white" />
                  </PressableScale>
                </View>
              </View>
            </View>
          </View>
        </OnboardingSwiper>
      </View>
    </View>
  );
};
