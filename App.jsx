import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./src/screens/Contact";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome!!",
            headerStyle: {
              backgroundColor: "grey",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAling: "center",
          }}
        />

        <Stack.Screen
          name="Contato"
          component={Contact}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "grey",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Profile}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "grey",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
