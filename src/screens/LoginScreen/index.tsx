import "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Divider } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import MoshIcon from "../../components/MoshIcon";
import { FloatingLabelInput } from "../../components/FloatingLabelInput";
import { PressableScale } from "../../components/HoverButton";
import { Formik } from "formik";
import { ErrorMessage } from "../../components/ErrorMessage";

import * as Yup from "yup";

interface MyFormValues {
  phone: string;
}

export const SignInScreen = ({ navigation: { goBack } }) => {
  const [input, setInput] = useState(null);

  const initialValues: MyFormValues = { phone: "" };
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Telefonnummer påkrævet.")
      .min(11, "Telefonnummer påkrævet."),
  });

  const handleBackgroundClick = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => handleBackgroundClick()}>
        <View className="flex-1 h-full">
          <View className="pt-4 border-b border-gray-400 mb-4">
            <View className="absolute mt-4 ml-4">
              <Ionicons
                onPress={() => goBack()}
                name="close-outline"
                size={27}
                color="black"
              />
            </View>
            <Text className="mx-auto text-lg font-semibold text-current mb-4">
              Log ind, eller tilmeld dig
            </Text>
          </View>
          <View className="px-5">
            <View className="mt-4">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={false}
                onSubmit={(values) => {
                  console.log(values);
                  input.current.focus();
                }}
              >
                {({ handleSubmit, errors }) => (
                  <View>
                    <FloatingLabelInput
                      name="phone"
                      onSetup={({ ref }) => setInput(ref)}
                    />
                    <View>
                      <ErrorMessage error={errors.phone} />
                      {!errors.phone && (
                        <Text className="text-xs p-2 mt-2 bottom-3">
                          Vi sender dig en sms for at bekræfte dit nummer.
                          Standardafgifter for beskeder og data gælder. "LINK"
                        </Text>
                      )}
                    </View>
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
                      onPress={() => {
                        if (errors && input) input.current.focus();
                        handleSubmit();
                      }}
                    >
                      <View>
                        <LinearGradient
                          className="items-center rounded-md"
                          colors={["#303234", "#222222", "#111111"]}
                        >
                          <Text className="text-base font-bold px-10 py-3 text-white text-center">
                            Fortsæt
                          </Text>
                        </LinearGradient>
                      </View>
                    </PressableScale>
                  </View>
                )}
              </Formik>
            </View>
            <View className="mt-4 w-full mb-3 font-normal text-xs leading-4 flex-row items-center">
              <Divider className="w-2/5" />
              <Text className="my-4 mx-0 text-center w-1/5 inline">eller</Text>
              <Divider className="w-2/5 " />
            </View>
            <View className="w-full flex flex-row">
              <View className="w-1/4 items-center ">
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
                >
                  <MoshIcon
                    packageLibrary="fontawesome"
                    name="facebook"
                    size={64}
                  />
                </PressableScale>
              </View>

              <View className="w-1/4 items-center">
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
                >
                  <MoshIcon name="google" size={64} />
                </PressableScale>
              </View>

              <View className="w-1/4 items-center">
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
                >
                  <MoshIcon
                    packageLibrary="fontawesome"
                    name="apple"
                    size={64}
                  />
                </PressableScale>
              </View>

              <View className="w-1/4 items-center">
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
                >
                  <MoshIcon
                    packageLibrary="fontawesome"
                    name="envelope-open"
                    size={64}
                  />
                </PressableScale>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
