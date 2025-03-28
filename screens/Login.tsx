import React from "react";
import { View, Text, Button } from "react-native";
import { StackScreenProps } from "../type";

export default function LoginScreen({ navigation }: StackScreenProps<"Login">) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
      <Button title="Go to Main" onPress={() => navigation.navigate("MainTabs")} />
    </View>
  );
}
