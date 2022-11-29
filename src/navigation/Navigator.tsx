import React from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import { OnboardingScreen } from "../screens/WelcomeScreen/index";
import { SignInScreen } from "../screens/LoginScreen/index";
import { Routes } from "./routes";
import { SignUpScreen } from "../screens/SignUpScreen";
import { TestingScreen } from "../screens/TestingScreen";

const BottomSheet = createBottomSheetNavigator();

export const Navigator = () => {
  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  return (
    <NavigationContainer>
      <BottomSheet.Navigator
        initialRouteName={Routes.ONBOARDING_SCREEN}
        screenOptions={{
          snapPoints: ["67%", "90%"],
          backdropComponent: renderBackdrop,
        }}
      >
        <BottomSheet.Screen
          name={Routes.ONBOARDING_SCREEN}
          component={OnboardingScreen}
        />
        <BottomSheet.Screen
          name={Routes.LOGIN_SCREEN}
          component={SignInScreen}
          options={{
            handleStyle: { position: "absolute", top: -30, width: "100%" },
            handleIndicatorStyle: { width: 60 },
          }}
        />
        <BottomSheet.Screen
          name={Routes.SIGN_IN_SCREEN}
          component={SignUpScreen}
        />
        <BottomSheet.Screen
          name={Routes.TESTING_SCREEN}
          component={TestingScreen}
        />
      </BottomSheet.Navigator>
    </NavigationContainer>
  );
};
