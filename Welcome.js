import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Welcome({ navigation }) {
  /* Defining an array of drink names. */
  const drinks = ["Apelsinjuice", "Banansmoothie", "Cider"];

  /* Function to handle item click and navigate to "ItemDetail" screen
  with the selected item. */
  const itemClick = (item) => {
    navigation.navigate("ItemDetail", { selectedItem: item });
  };

  return (
    <View style={styles.container}>
      {/* Creating a Flatlist component to render a list of drinks. */}
      <FlatList
        data={drinks}
        renderItem={({ item }) => (
          /* Creating a button for each drink item. */
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => itemClick(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BEFFF7",
    alignItems: "center",
    justifyContent: "center",
  },

  buttons: {
    borderWidth: 1,
    borderRadius: 30,
    height: 70,
    width: 130,
    backgroundColor: "#6499E9",
    borderColor: "#393E46",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 50,
    top: 80,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 14,
  },
});
