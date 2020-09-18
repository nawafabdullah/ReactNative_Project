import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Navigator from "./routes/accountsStack";

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text> Khalid BinSaddiq Stores </Text>
      <View>
        <image source={require("./assets/KBS-Store.jpg")} />
      </View>
      <View>
        <Navigator />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor: "lightblue",
    alignItems: "center",
    //justifyContent: "center",
  },
});
