import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../../modules/home/screens/Home";
import HouseDetail from "../../../modules/home/screens/HouseDetail";

const Stack = createStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator initialRouteName="LoginStack">
            <Stack.Screen 
                name="LoginStack" 
                component={Home} 
                options={{ title: "Iniciar sesión" }}
            />
            <Stack.Screen 
                name="HouseDetail" 
                component={HouseDetail} 
                options={{ title: "HouseDetail" }}
            />
        </Stack.Navigator>
    )
}