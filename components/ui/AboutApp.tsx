import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const AboutApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text style={styles.header} variant="headlineLarge">
          About this app
        </Text>
        <Text variant="bodyMedium" style={styles.content}>
          To you, my love, I dedicate this application, an extraordinary woman,
          with a strong and fulfilled mind, generous and radiant, to you who
          shines brightly and has a loving heart that gives itself entirely to
          love. I couldn't have dreamed of anything better for my life or for
          our future children. I am grateful to heaven for putting you on my
          path, a path that seemed devoid of presence. However, like a
          game-changing ingredient in the midst of scattered soups, heaven
          decided to put you in mine to change its flavor, equaling that of
          illustrious chefs. You are a support, a gazelle with a startled air,
          yet you hide a profound beauty that one could not suspect and an
          intelligence worthy of the great minds of our century with a touch of
          dark humor that is sarcastic and funny. I love you with an infinite
          and ineffable love, a love that has transcended time and space, that
          has hardened through trials unsuspected by all. Only God knows this,
          and it is a love that I intend to share with you, until eternal life.
          
        </Text>
        <Text style={{textAlign:"left",
             padding:10,
              fontFamily:"dancing-bold",
              fontSize:27,
              color:"#0a7ea4",
              }}>
            Your lovely Husband
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontFamily: "josefin-sans",
    fontSize: 24,
    padding:10,
    textAlign:"center",
    color:"#0a7ea4",
  },
  content: {
    fontFamily: "dancing-bold",
    padding:13,
    fontSize:19,
    textAlign:"justify",
    lineHeight:25,
    color:"#0a7ea4",

  },
});
export default AboutApp;
