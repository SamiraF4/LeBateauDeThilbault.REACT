import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TouchableOpacity } from "react-native";

import Bateau from "../screen/Bateau";
import Contact from "../screen/Contact";
import Detail from "../screen/Detail";
import Accueil from "../screen/Accueil";
import Panier from "../screen/Panier";
import ProduitDetail from "../screen/ProduitDetail";
import Produit from "../screen/Produit";
import Recette from "../screen/Recette";
import Restaurant from "../screen/Restaurant";
const Stack = createStackNavigator();

const ICON_SIZE = 24;
const MARGIN = 20;

const HomeButton = ({ navigation }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate("Accueil")}
        style={{ marginLeft: MARGIN }}
    >
        <Ionicons name="md-home" size={ICON_SIZE} color="white" />
    </TouchableOpacity>
);

const CartButton = ({ navigation }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate("Panier")}
        style={{ marginRight: MARGIN }}
    >
        <Ionicons name="md-cart" size={ICON_SIZE} color="white" />
    </TouchableOpacity>
);

function screenOptionStyle({ route, navigation }) {
    const isAccueil = route.name === "Accueil";

    return {
        headerMode: "screen",
        headerTintColor: "black",
        headerBackTitle: "Back",
        gestureEnabled: true,
        headerStyle: { backgroundColor: "black" },
        headerLeft: !isAccueil
            ? () => <HomeButton navigation={navigation} />
            : null,
        headerRight: !isAccueil
            ? () => <CartButton navigation={navigation} />
            : null,
        headerShown: isAccueil ? false : true,
    };
}

const MainStackNavigator = () => (
    <Stack.Navigator
        initialRouteName="Accueil"
        screenOptions={screenOptionStyle}
    >
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Produits" component={Produit} />
        <Stack.Screen name="Bateaux" component={Bateau} />
        <Stack.Screen name="Restaurants" component={Restaurant} />
        <Stack.Screen name="Recettes" component={Recette} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Nos bateaux partenaires" component={Detail} />
        <Stack.Screen
            name="Nos restaurants partenaires"
            component={Detail}
        />
        <Stack.Screen name="Nos recettes" component={Detail} />
        <Stack.Screen
            name="Choisissez vos produits"
            component={ProduitDetail}
        />
        <Stack.Screen name="Panier" component={Panier} />
    </Stack.Navigator>
);

const PanierStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Panier" component={Panier} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, PanierStackNavigator };
