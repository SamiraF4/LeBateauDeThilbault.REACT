import React from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import globalStyles from "../app/styles/GlobalStyle";
import Coordonnees from "../component/Coordonnees";

const RESTAURANTS = [
    {
        title: `Bistrot des Gascons`,
        img: require("../assets/img/desGascons.png"),
        icon: require("../assets/img/desGascons_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances...\n`,
    },
    {
        title: "Les fous de l'Île",
        img: require("../assets/img/fousDeLIle.png"),
        icon: require("../assets/img/fousDeLIle_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances...\n`,
    },
    {
        title: "Bistrot Landais",
        img: require("../assets/img/bistrotLandais.png"),
        icon: require("../assets/img/bistrotLandais_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances...\n`,
    },
    {
        title: "Villa 9-Trois",
        img: require("../assets/img/villa9Trois.png"),
        icon: require("../assets/img/villa9Trois_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances...\n`,
    },
    {
        title: "Bistrot du Sommelier",
        img: require("../assets/img/duSommelier.png"),
        icon: require("../assets/img/duSommelier_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances...\n`,
    },
    {
        title: "Devenez partenaire!",
        img: require("../assets/img/ancre.png"),
        icon: require("../assets/img/ancre.png"),
        descriptioncom: "",
        aboutus: "",
    },
];

const RestaurantCard = ({
    title,
    img,
    icon,
    descriptioncom,
    aboutus,
    onPress,
}) => (
    <TouchableOpacity style={styles.boutonAvecIcon} onPress={onPress}>
        <Image style={styles.icon} source={icon} />
        <View>
            <Text style={styles.boutonTexte}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const Restaurant = (props) => {
    const BeforeRestaurantScreen = () => (
        <View style={globalStyles.descriptionArea}>
            <Text style={globalStyles.titre}>Restaurants partenaires</Text>
            <Text style={globalStyles.bold}>
                Tous les restaurants partenaires avec le bateau de Thibault.
            </Text>
            <Coordonnees />
        </View>
    );

    return (
        <SafeAreaView style={globalStyles.container}>
            <ImageBackground
                source={require("../assets/img/background.png")}
                resizeMode="cover"
                style={globalStyles.background}
            >
                <View>
                    <View style={globalStyles.boutonsArea}>
                        <FlatList
                            data={RESTAURANTS}
                            ListHeaderComponent={BeforeRestaurantScreen}
                            keyExtractor={(item) => item.title}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <RestaurantCard
                                    title={item.title}
                                    img={item.img}
                                    icon={item.icon}
                                    descriptioncom={item.descriptioncom}
                                    aboutus={item.aboutus}
                                    onPress={() => {
                                        if (item.descriptioncom !== "") {
                                            props.navigation.navigate(
                                                "Nos restaurants partenaires",
                                                {
                                                    name: item.title,
                                                    image: item.img,
                                                    descriptioncom:
                                                        item.descriptioncom,
                                                    aboutus: item.aboutus,
                                                }
                                            );
                                        } else {
                                            props.navigation.navigate(
                                                "Contact"
                                            );
                                        }
                                    }}
                                />
                            )}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    boutonAvecIcon: {
        flexDirection: "row",
        marginHorizontal: "2%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "48%",
        marginBottom: 10,
    },
    icon: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    boutonTexte: {
        alignSelf: "center",
        color: "black",
        fontSize: 16,
        width: "70%",
    },
});

export default Restaurant;
