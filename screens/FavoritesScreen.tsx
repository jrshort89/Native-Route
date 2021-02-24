import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { View, Text, StyleSheet } from "react-native";

export default function FavoritesScreen(props: any) {
  const favMeals = useSelector((state) => state.favoriteMeals);

  if (favMeals.length < 1 || !favMeals) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>You must not like food...</Text>
        <Text></Text>
        <View style={{ width: "83%", alignItems: "center" }}>
          <Text style={styles.text}>because there are no favorited meals.</Text>
        </View>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
}

FavoritesScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "open-sans",
  },
});
