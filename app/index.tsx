import "@/global.css";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Linking, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import ExperienceSection from "../components/ui/ExperienceSection";
import IconButton from "../components/ui/iconbutton";
import ProfileDetails from "../components/ui/profileDetails";
import SkillsSection from "../components/ui/SkillsSection";

export default function Index() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView className="flex-1 bg-slate-100">
      <SafeAreaView className="flex-1">
        {}
        <View className="items-center mt-6 mb-6">
          <ProfileDetails
            imageSource={require("../assets/images/imagen1.jpg")}
            size={140}
            name="Jhostin Quijije"
            subtitle="React Native Dev"
          />

          {}
          <View className="flex-row mt-4 justify-center space-x-4">
            <IconButton
              variant="light"
              icon={<Entypo name="instagram" size={24} color="#E4405F" />}
              onPress={() =>
                openLink("https://www.instagram.com/jhostin._.jq/")
              }
            />
            <IconButton
              variant="light"
              icon={<AntDesign name="twitter" size={24} color="#1DA1F2" />}
              onPress={() => openLink("https://x.com/Jhostin88604")}
            />
            <IconButton
              variant="dark"
              icon={<AntDesign name="github" size={24} color="#fff" />}
              onPress={() => openLink("https://github.com/Jhostin3")}
            />
            <IconButton
              variant="dark"
              icon={<Entypo name="linkedin" size={24} color="#fff" />}
              onPress={() => openLink("https://ec.linkedin.com/")}
            />
          </View>
        </View>

        {}
        <View className="bg-slate-900 rounded-t-3xl w-screen py-6 px-4">
          <SkillsSection />
          <ExperienceSection />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
