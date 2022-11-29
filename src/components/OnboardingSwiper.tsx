import { View, Text } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

type Props = {
  children: React.ReactNode;
};

const FEATURES_LIST = [
  {
    title: "Goodbye Cash, Hello Card!",
    description:
      "Create your own account and geet Revolut Junior card. Choose from a set of designs and make it yours!",
    icon: "🎒",
  },
  {
    title: "Receive money into your account",
    description:
      "And parent or grandparent can receive money into your account. Just send them the link.",
    icon: "📱",
  },
  {
    title: "Use with Apple Pay",
    description:
      "Sometimes it's hard to pay with cash. You can use Revolut Junior with Apple Pay.",
    icon: " 💳",
  },
];

export const OnboardingSwiper = ({ children }: Props) => {
  return (
    <View className="h-screen">
      <Swiper showsPagination={false}>
        {FEATURES_LIST.map((feature, index) => (
          <View key={`feature-${index}`} className="flex-1 py-32 px-6">
            <Text className="text-white mb-4 text-5xl font-bold">
              {feature.title}
            </Text>
            <Text className="text-white text-xl">{feature.description}</Text>
            <View className="justify-center flex-1">
              <Text className="text-9xl">{feature.icon}</Text>
            </View>
          </View>
        ))}
      </Swiper>
      {children}
    </View>
  );
};
