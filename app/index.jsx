import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Colors from "../components/Colors";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Diet Planner</Text>
        <Text style={styles.subcontent}>Craft delicious, Healthy, Mean plans tailored just for you. Achieve your goal with ease!</Text>
      </View>

      <View style={styles.btn}>
        <Button title={'Get Started'}
          onPress={() => console.log('btn click')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 200,
  },
  logo: {
    width: 200,
    height: 200,
    opacity: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.white,
    opacity: 1,
  },
  subcontent: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 30,
    opacity: 0.8,
  },
  btn: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
});
