import React from "react";
import {
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ImageBackground,
    ScrollView,
} from "react-native";
import globalStyles from "../app/styles/GlobalStyle";

const Detail = ({ route }) => {
    const { container } = globalStyles;
    const { name, image, descriptioncom, aboutus } = route.params;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../assets/img/background.png")}
                resizeMode="cover"
                style={{ flex: 1, justifyContent: "center" }}
            >
                <ScrollView>
                    <Image style={styles.photo} source={image} />
                    <Text style={globalStyles.titre}>{name}</Text>
                    {descriptioncom && (
                        <Text style={styles.descriptioncom}>
                            {descriptioncom}
                        </Text>
                    )}
                    <Text style={styles.description}>{aboutus}</Text>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    descriptioncom: {
        marginVertical: 12,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        marginVertical: 12,
        textAlign: "center",
        fontSize: 16,
        fontStyle: "italic",
    },
    photo: {
        height: 300,
        width: 200,
        resizeMode: "contain",
        alignSelf: "center",
    },
});

export default Detail;
