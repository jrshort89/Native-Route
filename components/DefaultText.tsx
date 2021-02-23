import React from "react";
import { StyleSheet, Text } from "react-native";

export default function DefaultText(props: any) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
