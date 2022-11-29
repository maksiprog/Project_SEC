import "react-native-reanimated";
import React, { useEffect, useRef } from "react";
import { TextInput, View } from "react-native";
import { MotiText, MotiView } from "moti";
import { formatNumber } from "../lib/format";
import { useFormikContext } from "formik";
import { floatingInput } from "../lib/animations";

export const FloatingLabelInput = ({ name, onSetup = () => {} }) => {
  const { values, setFieldValue, setFieldTouched, errors, touched } =
    useFormikContext();
  const inputField = useRef();

  useEffect(() => {
    onSetup({ ref: inputField });
  }, [inputField]);

  const onChange = (text) => {
    const number = formatNumber(text);
    const shouldValidate = text.length > 7 ? true : false;

    setFieldValue(name, number, shouldValidate);
  };

  const handleFocus = () => {
    setFieldTouched(name, true, false);
  };

  const handleBlur = () => {
    if (values[name] == "") setFieldTouched("phone", false);
  };

  const handleAnimate = (animation) => {
    "worklet";

    if (errors[name]) return floatingInput[animation].error;
    if (touched[name]) return floatingInput[animation].animate;

    return floatingInput[animation].initial;
  };

  return (
    <View className="mb-2">
      <MotiView
        className="rounded-xl border bg-white border-solid pr-2.5"
        animate={handleAnimate("border")}
        transition={{ duration: 1 }}
      >
        <MotiText
          className="absolute text-base top-6 left-4 opacity-0"
          animate={handleAnimate("label")}
          transition={{ duration: 1 }}
        >
          +45
        </MotiText>
        <MotiText
          className="absolute top-5 left-3 text-base"
          animate={handleAnimate("text")}
          transition={{ duration: 1 }}
        >
          Telefonnummer
        </MotiText>

        <TextInput
          ref={inputField}
          clearButtonMode="always"
          keyboardType="number-pad"
          maxLength={11}
          value={values[name]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={(text) => onChange(text)}
          className="pl-12 top-1 h-14 text-base"
        />
      </MotiView>
    </View>
  );
};
