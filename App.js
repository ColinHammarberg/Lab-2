import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/app-image.png")} style={{ flex: 1 }} />
      <Text style={styles.text}>This is my app!</Text>
      <View style={styles.view}>
        <View style={{ backgroundColor: "#0000FF", flex: 2 }}></View>
        <View style={{ backgroundColor: "#ff0000", flex: 1 }}></View>
      </View>
      <Button
        title={"Credits"}
        onPress={() => {
          Alert.alert("Colin");
        }}
        style={styles.button}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#00FF00",
  },
  text: {
    flex: 1,
    color: "green",
    fontSize: "40px",
  },
  view: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
  },
});
