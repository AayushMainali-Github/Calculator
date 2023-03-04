import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "./Components/Button";
export default function App() {
  let [disp, setDisp] = useState("");
  let [result, setResult] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.display}>
        <Text style={styles.displayText}>{disp}</Text>
      </View>
      <View style={styles.buttons}>
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="C" text="C" textStyle={styles.blueText} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="(" text="(" textStyle={styles.blueText} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value=")" text=")" textStyle={styles.blueText} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="/" text="÷" textStyle={styles.blueText} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="7" text="7" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="8" text="8" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="9" text="9" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="*" text="×" textStyle={styles.blueText} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="4" text="4" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="5" text="5" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="6" text="6" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="-" text="–" textStyle={styles.blueText} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="1" text="1" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="2" text="2" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="3" text="3" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="+" text="+" textStyle={styles.blueText} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="00" text="00" />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="0" text="0" textStyle={{ color: "white" }} />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="." text="." />
        <Button states={{ setDisp: setDisp, setResult: setResult, result: result }} value="=" text="=" buttonStyle={styles.blueButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
  },
  display: {
    width: "100%",
    borderBottomColor: "#2e2d2d",
    borderBottomWidth: 1.5,
    alignItems: "flex-end",
  },
  displayText: {
    color: "white",
    fontSize: 40,
    paddingRight: 40,
    paddingBottom: 5,
  },
  buttons: {
    margin: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  blueButton: {
    backgroundColor: "#1f75ff",
    borderRadius: 50,
    width: 60,
    height: 60,
    margin: 12.5,
  },
  blueText: {
    color: "#1f75ff",
  },
});
