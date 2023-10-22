import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Provider } from "react-redux";
import store from "./src/app/store/store";
import { MainStackNavigator } from "./src/navigation/Stack";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainStackNavigator />
            </NavigationContainer>
        </Provider>
    );
}
