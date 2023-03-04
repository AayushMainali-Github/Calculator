import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity } from "react-native";

const Button = (props) => {
  let chrs = "12345678900+-/*().";
  press = () => {
    if (chrs.includes(props.value)) {
      props.states.setDisp((prev) => {
        prev += props.text;
        return prev;
      });
      props.states.setResult((prev) => {
        prev += props.value;
        return prev;
      });
    } else if (props.value == "C") {
      props.states.setDisp("");
      props.states.setResult("");
    } else if (props.value == "=") {
      try {
        res = eval(props.states.result);
        props.states.setDisp(res);
        props.states.setResult(res);
      } catch (err) {}
    }
  };
  return (
    <TouchableOpacity onPress={press} style={[style1.button, props.buttonStyle]}>
      <Text style={[style1.buttonText, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const style1 = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    width: 85,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
});

export default Button;
