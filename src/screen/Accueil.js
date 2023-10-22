import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    ScrollView,
} from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../app/styles/GlobalStyle";
import Coordonnees from "../component/Coordonnees";

const Accueil = (props) => {
    const {
        container,
        background,
        descriptionArea,
        boutonsArea,
        boutonDuoStyle,
        boutonGeneriqueStyle,
        boutonTexte,
    } = globalStyles;
    const { titre, boutonSoloStyle, iconStyle } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../assets/img/background.png")}
                resizeMode="cover"
                style={background}
            >
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={descriptionArea}>
                        <Text style={titre}>Le Bateau de Thibault</Text>
                        <Text>Vente en direct de notre bateau</Text>
                        <Text>
                            Produits selon la saison, livraisons sur Paris
                        </Text>
                        <Coordonnees />
                    </View>
                    <View style={boutonsArea}>
                        <TouchableOpacity
                            style={boutonSoloStyle}
                            onPress={() =>
                                props.navigation.navigate("Produits")
                            }
                        >
                            <Text style={boutonTexte}>
                                <MaterialCommunityIcons
                                    name="fish"
                                    style={iconStyle}
                                />
                                Produits et Promotions
                            </Text>
                        </TouchableOpacity>

                        <View style={boutonDuoStyle}>
                            <TouchableOpacity
                                style={boutonGeneriqueStyle}
                                onPress={() =>
                                    props.navigation.navigate("Bateaux")
                                }
                            >
                                <Text style={boutonTexte}>
                                    <MaterialCommunityIcons
                                        name="anchor"
                                        style={iconStyle}
                                    />
                                    Bateaux
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={boutonGeneriqueStyle}
                                onPress={() =>
                                    props.navigation.navigate("Restaurants")
                                }
                            >
                                <Text style={boutonTexte}>
                                    <MaterialIcons
                                        name="storefront"
                                        style={iconStyle}
                                    />
                                    Restaurants
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={boutonDuoStyle}>
                            <TouchableOpacity
                                style={boutonGeneriqueStyle}
                                onPress={() =>
                                    props.navigation.navigate("Recettes")
                                }
                            >
                                <Text style={boutonTexte}>
                                    <MaterialCommunityIcons
                                        name="silverware-clean"
                                        style={iconStyle}
                                    />
                                    Recettes
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={boutonGeneriqueStyle}
                                onPress={() =>
                                    props.navigation.navigate("Contact")
                                }
                            >
                                <Text style={boutonTexte}>
                                    <MaterialCommunityIcons
                                        name="jellyfish-outline"
                                        style={iconStyle}
                                    />
                                    Contact
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingTop: 40,
    },

    titre: {
        fontStyle: "italic",
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },

    boutonSoloStyle: {
        marginHorizontal: "1%",
        marginBottom: 10,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 20,
        width: "98%",
    },

    iconStyle: {
        fontSize: 30,
        color: "black",
    },
});

export default Accueil;
