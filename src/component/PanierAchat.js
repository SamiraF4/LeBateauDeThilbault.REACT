import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";

const PanierAchat = ({ onPress }) => {
    const itemCount = useSelector((state) => state.basket.nbItems);

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                        name="cart"
                        style={styles.shoppingCartIcon}
                    />
                    <Badge
                        value={itemCount}
                        containerStyle={styles.badgeContainer}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    iconContainer: {
        alignItems: "center",
        position: "relative",
    },
    shoppingCartIcon: {
        fontSize: 30,
    },
    badgeContainer: {
        position: "absolute",
        top: -4,
        left: -4,
    },
});

export default PanierAchat;
