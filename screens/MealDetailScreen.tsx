import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function MealDetailScreen(props: any) {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen</Text>
      <Button
        title="Back to Catgories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
