import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ItemDetail from "./ItemDetail";
import Welcome from "./Welcome";

export default function App() {
  /* Creating a stack navigator instance. */
  const Stack = createNativeStackNavigator();

  return (
    /* Wrapping my app in a NavigationContainer to be able to navigate screens. */
    <NavigationContainer>
      <Stack.Navigator>
        {/* Defining the "Welcome" screen and specifying the component to render. */}
        <Stack.Screen name="Welcome" component={Welcome} />
        {/* Defining the "Welcome" screen and specifying the component to render. */}
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
