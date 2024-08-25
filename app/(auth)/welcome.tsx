/* eslint-disable prettier/prettier */

import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full items-center justify-between g-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] bg-[#E2E8F0] rounded-full" />}
        activeDot={
          <View className="w-[32px] h-[4px] bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          // <View>
          <Text>{item.title}</Text>
          // </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
