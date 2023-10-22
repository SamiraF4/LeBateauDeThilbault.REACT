import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../app/store/BasketSlice";

import {
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
} from "react-native";
import globalStyles from "../app/styles/GlobalStyle";
import data from "../assets/data.json";

const produits = data;

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToBasket = () => {
        dispatch(addToBasket(product.id));
    };

    return (
        <View key={product.id}>
            <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={handleAddToBasket}
            >
                <Image
                    style={styles.icon}
                    source={require("../assets/img/poulpe.png")}
                />
                <View>
                    <Text style={globalStyles.bold}>{product.name}</Text>
                    <Text>{product.price} €</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const ProduitDetail = ({ route, navigation }) => {
    const filterProducts = () => {
        if (route.params.categorie !== undefined) {
            return produits.filter(
                (product) => product.category === route.params.categorie
            );
        }
        return produits.filter((product) => product.discount > 0.0);
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <ImageBackground
                source={require("../assets/img/background.png")}
                resizeMode="cover"
                style={globalStyles.background}
            >
                <ScrollView>
                    <Text style={globalStyles.titre}>
                        Choisissez vos produits :
                    </Text>
                    {filterProducts().map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    boutonSoloStyle: {
        marginHorizontal: "1%",
        marginVertical: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 30,
        width: "98%",
        flexDirection: "row",
        justifyContent: "flex-start",
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

export default ProduitDetail;
