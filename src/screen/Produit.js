import React from "react";
import {
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../app/styles/GlobalStyle";

const categories = [
    { name: "Poissons", id: 0 },
    { name: "Coquillages", id: 1 },
    { name: "Crustacés", id: 2 },
    { name: "Promotions", id: 3 },
];

const Produit = (props) => {
    const renderCategoryButtons = () => {
        return categories.map((category) => (
            <View key={category.id}>
                <TouchableOpacity
                    style={styles.boutonSoloStyle}
                    onPress={() =>
                        props.navigation.navigate("Choisissez vos produits", {
                            categorie: category.id,
                        })
                    }
                >
                    <MaterialCommunityIcons
                        name="jellyfish"
                        style={styles.iconStyle}
                    />
                    <Text style={globalStyles.boutonTexte}>
                        {category.name}
                    </Text>
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <ImageBackground
                source={require("../assets/img/background.png")}
                resizeMode="cover"
                style={globalStyles.background}
            >
                <ScrollView>
                    <Text style={styles.titre}>Choisissez vos produits :</Text>
                    {renderCategoryButtons()}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    boutonSoloStyle: {
        marginHorizontal: "1%",
        marginVertical: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 30,
        width: "98%",
        flexDirection: "row",
        justifyContent: "center",
    },
    iconStyle: {
        fontSize: 30,
        color: "black",
        marginRight: 10,
    },
    titre: {
        fontSize: 30,
        color: "black",
        fontStyle: "italic",
        marginBottom: 30,
        marginTop: 20,
        alignSelf: "center",
    },
});

export default Produit;
