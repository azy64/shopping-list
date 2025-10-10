import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const AboutApp = () => {
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <View>
        <Text style={styles.header} variant="headlineLarge">
          About this app
        </Text>
        <Text variant="bodyMedium" style={styles.content}>
          text here
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontFamily: "josefin-sans",
    fontSize: 24,
  },
  content: {
    fontFamily: "josefin-sans",
  },
});
export default AboutApp;
