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
import Coordonnees from "../component/Coordonnees";
import globalStyles from "../app/styles/GlobalStyle";

const BATEAUX = [
    {
        title: "De la Brise",
        img: require("../assets/img/deLaBrise.png"),
        icon: require("../assets/img/deLaBrise_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances\nY a d' la joie, des hirondelles\nC'est le sud de la France\nPapa bricole au garage\nMaman lit dans la chaise longue\nDans ce joli paysage\nMoi, je me balade en tongs\n\nQue de bonheur!\nQue de bonheur!`,
    },
    {
        title: "Saphir",
        img: require("../assets/img/saphir.png"),
        icon: require("../assets/img/saphir_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances\nY a d' la joie, des hirondelles\nC'est le sud de la France\nPapa bricole au garage\nMaman lit dans la chaise longue\nDans ce joli paysage\nMoi, je me balade en tongs\n\nQue de bonheur!\nQue de bonheur!`,
    },
    {
        title: "Gast Micher",
        img: require("../assets/img/gastMicher.png"),
        icon: require("../assets/img/gastMicher_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances\nY a d' la joie, des hirondelles\nC'est le sud de la France\nPapa bricole au garage\nMaman lit dans la chaise longue\nDans ce joli paysage\nMoi, je me balade en tongs\n\nQue de bonheur!\nQue de bonheur!`,
    },
    {
        title: "Aquilon",
        img: require("../assets/img/aquilon.png"),
        icon: require("../assets/img/aquilon_icon.png"),
        descriptioncom: "XXX YYY ZZZ",
        aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances\nY a d' la joie, des hirondelles\nC'est le sud de la France\nPapa bricole au garage\nMaman lit dans la chaise longue\nDans ce joli paysage\nMoi, je me balade en tongs\n\nQue de bonheur!\nQue de bonheur!`,
    },
    {
        title: "Contact",
        img: require("../assets/img/ancre.png"),
        icon: require("../assets/img/ancre.png"),
        descriptioncom: "",
        aboutus: "",
    },
    {
        title: "Contact",
        img: require("../assets/img/ancre.png"),
        icon: require("../assets/img/ancre.png"),
        descriptioncom: "",
        aboutus: "",
    },
];

const BateauItem = ({ item, navigation }) => {
    const isContact = item.descriptioncom === "";

    const navigateTo = isContact ? "Contact" : "Nos bateaux partenaires";

    const navigationParams = isContact
        ? null
        : {
              name: item.title,
              image: item.img,
              descriptioncom: item.descriptioncom,
              aboutus: item.aboutus,
          };

    return (
        <TouchableOpacity
            style={[
                styles.boutonAvecIcon,
                {
                    marginHorizontal: "2%",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
            ]}
            onPress={() => navigation.navigate(navigateTo, navigationParams)}
        >
            <Image style={styles.icon} source={item.icon} />
            <Text style={styles.boutonTexte}>{item.title}</Text>
        </TouchableOpacity>
    );
};

const Bateau = ({ navigation }) => {
    const iconSize = 24;
    const buttonMargin = "2%";
    const buttonBackgroundColor = "rgba(0, 0, 0, 0.1)";

    const BeforeBateauScreen = () => {
        return (
            <View style={globalStyles.descriptionArea}>
                <Text style={globalStyles.titre}>Nos bateaux partenaires</Text>
                <Text style={globalStyles.bold}>
                    Tous les eaux mènent à Thibault.
                </Text>
                <Coordonnees />
            </View>
        );
    };

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
                            data={BATEAUX}
                            ListHeaderComponent={BeforeBateauScreen}
                            keyExtractor={(item) => item.title}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <BateauItem
                                    item={item}
                                    navigation={navigation}
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
    text: {
        fontSize: 30,
    },
    boutonAvecIcon: {
        flexDirection: "row",
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
    },
});

export default Bateau;
