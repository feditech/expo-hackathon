import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Test from "../screens/Test";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} 
        />
        {/* <Stack.Screen name="Test" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
