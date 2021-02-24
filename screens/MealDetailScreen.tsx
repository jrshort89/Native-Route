import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

export default function MealDetailScreen(props: any) {
  const availableMeals = useSelector((state) => state.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentMealIsFav = useSelector((state) =>
    state.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const dispatch = useDispatch();

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  // useEffect(() => {
  //   props.navigation.setParams({
  //     mealTitle: selectedMeal.title,
  //   });
  // }, [selectedMeal]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavHandler,
    });
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: currentMealIsFav,
    });
  }, [currentMealIsFav]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal?.duration}m</DefaultText>
        <DefaultText>{selectedMeal?.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal?.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal?.ingredients.map((ing) => (
        <Text key={ing} style={styles.listItem}>
          {ing}
        </Text>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((step) => (
        <Text style={styles.listItem} key={step}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
}

MealDetailScreen.navigationOptions = (navData: any) => {
  const mealTitle = navData.navigation.getParam("mealTitle");
  const toggleFav = navData.navigation.getParam("toggleFav");
  const isFav = navData.navigation.getParam("isFav");
  // const mealId = navData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={() => toggleFav()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 3.5,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  listItem: {
    padding: 4,
    marginLeft: 10,
    fontSize: 18,
  },
});
