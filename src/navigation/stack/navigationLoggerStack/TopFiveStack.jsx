import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopFive from "../../../modules/topfive/screens/TopFive";

const Stack = createStackNavigator();

export default function TopFiveStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="topFive"
        component={TopFive}
        options={{ title: "Top 5" }}
      />
    </Stack.Navigator>
  );
}
