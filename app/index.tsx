import "@/global.css";
import { View, StyleSheet, Linking, Alert, Platform } from "react-native";
import ProfileDetails from "../components/profileDetails";
import IconButton from "../components/iconbutton";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {

  const openSocialApp = async (appURL: string, webURL: string) => {
    try {
      const supported = await Linking.canOpenURL(appURL);
      if (supported) {
        await Linking.openURL(appURL);
      } else {
        await Linking.openURL(webURL);
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo abrir la aplicación.');
    }
  };

  return (
    <View style={styles.container}>
      {}
      <ProfileDetails
        imageSource={require("../assets/images/imagen1.jpg")}
        size={140}
        name="Jhostin Quijije"
        subtitle="React Native Dev"
      />

      {/* Botones de redes sociales */}
      <View style={styles.socialButtons}>
        <IconButton
          icon={<Entypo name="instagram" size={24} color="black" />}
          onPress={() => openSocialApp(
            'instagram://user?username=tu_usuario',
            'https://www.instagram.com/tu_usuario'
          )}
        />
        <IconButton
          icon={<AntDesign name="twitter" size={24} color="black" />}
          onPress={() => openSocialApp(
            'twitter://user?screen_name=tu_usuario',
            'https://twitter.com/tu_usuario'
          )}
        />
        <IconButton
          icon={<AntDesign name="github" size={24} color="black" />}
          onPress={() => openSocialApp(
            'github://profile/tu_usuario',
            'https://github.com/tu_usuario'
          )}
        />
        <IconButton
          icon={<Entypo name="linkedin" size={24} color="black" />}
          onPress={() => openSocialApp(
            'linkedin://in/tu_usuario',
            'https://www.linkedin.com/in/tu_usuario'
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    gap: 16,
  },
});
