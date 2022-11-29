import React from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { OnboardingSwiper } from "../../components/OnboardingSwiper";
import { Routes } from "../../navigation/routes";

export const OnboardingScreen = ({ navigation }: any) => {
  const navigateTo = (destination: string) => {
    navigation.navigate(destination);
  };

  return (
    <View className="items-center justify-center bg-sky-400">
      <View className="flex flex-row items-center space-x-2 justify-around w-full py-4">
        <OnboardingSwiper>
          <View className="absolute bottom-0 w-full">
            <View className="mb-12 mx-6">
              <Button
                className=" bottom-20"
                variant="light"
                onPress={() => navigateTo(Routes.TESTING_SCREEN)}
              >
                VORES TESTING SCREEN
              </Button>
              <View className="flex flex-row items-center space-x-2">
                <View className="basis-1/2">
                  <Button
                    variant="dark"
                    styles=""
                    onPress={() => navigateTo(Routes.LOGIN_SCREEN)}
                  >
                    Log in
                  </Button>
                </View>
                <View className="basis-1/2">
                  <Button
                    variant="light"
                    onPress={() => navigateTo(Routes.SIGN_IN_SCREEN)}
                  >
                    Sign up
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </OnboardingSwiper>
      </View>
    </View>
  );
};
