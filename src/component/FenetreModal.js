import React from "react";
import { useDispatch } from "react-redux";
import {
    addToBasket,
    removeFromBasket,
    setQuantity,
} from "../app/store/BasketSlice";

import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const OPTIONS = ["1", "2", "3", "4", "5"];
const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const FenetreModal = (props) => {
    const dispatch = useDispatch();

    const changeModalVisibility = (visible) => {
        props.changeModalVisibility(visible);
    };

    const setData = (option) => {
        props.setData(option);
    };

    const onPressItem = (option) => {
        changeModalVisibility(false);
        setData(option);
        dispatch(setQuantity({ selectedId: props.selectedId, option }));
    };

    const optionItems = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        );
    });

    return (
        <TouchableOpacity
            onPress={() => changeModalVisibility(false)}
            style={styles.container}
        >
            <View
                style={[
                    styles.modal,
                    { width: WINDOW_WIDTH - 20, height: WINDOW_HEIGHT / 2 },
                ]}
            >
                <Text style={styles.title}> Sélectionner la quantité </Text>
                <ScrollView>
                    {optionItems}
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            dispatch(addToBasket(props.selectedId));
                            changeModalVisibility(false);
                        }}
                    >
                        <Text style={styles.text}>{"Ajouter 1"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            dispatch(removeFromBasket(props.selectedId));
                            changeModalVisibility(false);
                        }}
                    >
                        <Text style={styles.text}>{"Enlever 1"}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        backgroundColor: "white",
        borderRadius: 10,
    },
    option: {
        borderTopWidth: 1,
        alignItems: "flex-start",
    },
    text: {
        margin: 20,
        fontSize: 18,
    },
    title: {
        fontSize: 30,
        color: "black",
        fontStyle: "italic",
        marginBottom: 30,
        marginTop: 20,
        alignSelf: "center",
    },
});

export { FenetreModal };
