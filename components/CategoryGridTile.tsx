import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

export default function CategoryGridTile(props: any) {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{
            ...{ backgroundColor: props.color },
            ...styles.container,
            ...styles.text,
          }}
        >
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 130,
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,

    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "right",
  },
});
