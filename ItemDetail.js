import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ItemDetail({ route }) {
  /* Extracting the selected item from the navigation route's parameters. */
  const { selectedItem } = route.params;
  return (
    <View style={styles.container}>
      {/* Displaying the selected item with larger text. */}
      <Text style={styles.textStyle}>{selectedItem}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    color: "#FFFFFF",
    fontSize: 50,
  },
});
