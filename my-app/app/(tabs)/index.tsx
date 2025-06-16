import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (val) => {
    if (val === "C") {
      setInput("");
      setResult("");
    } else if (val === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + val);
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["C"],
  ];

  const getButtonStyles = (btn) => {
    if (btn === "C") {
      return [styles.button, styles.clearButton];
    } else if (["/", "*", "-", "+", "="].includes(btn)) {
      return [styles.button, styles.operatorButton];
    } else {
      return [styles.button, styles.numberButton];
    }
  };

  const getButtonTextStyles = (btn) => {
    if (btn === "C") {
      return [styles.buttonText, styles.clearButtonText];
    } else if (["/", "*", "-", "+", "="].includes(btn)) {
      return [styles.buttonText, styles.operatorButtonText];
    } else {
      return [styles.buttonText, styles.numberButtonText];
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={getButtonStyles(btn)}
                onPress={() => handlePress(btn)}
              >
                <Text style={getButtonTextStyles(btn)}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  display: {
    width: "100%",
    backgroundColor: "#2E2E2E",
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    minHeight: 120,
    justifyContent: "flex-end",
  },
  inputText: {
    fontSize: 32,
    color: "#E0E0E0",
    textAlign: "right",
    marginBottom: 5,
  },
  resultText: {
    fontSize: 48,
    color: "#FFFFFF",
    textAlign: "right",
    fontWeight: "bold",
  },
  buttons: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "500",
  },
  // Specific button styles
  numberButton: {
    backgroundColor: "#505050",
  },
  numberButtonText: {
    color: "#FFFFFF",
  },
  operatorButton: {
    backgroundColor: "#FF9500",
  },
  operatorButtonText: {
    color: "#FFFFFF",
  },
  clearButton: {
    backgroundColor: "#D4D4D2",
  },
  clearButtonText: {
    color: "#000000",
  },
});
