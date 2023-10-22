import { StyleSheet } from "react-native";

const Colors = {
  white: "white",
  lightBackground: "rgba(0, 0, 0, 0.2)",
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: "center",
  },

  titre: {
    fontSize: 30,
    color: Colors.white,
    fontStyle: "italic",
    marginBottom: 30,
    alignSelf: "center",
  },

  bold: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  descriptionArea: {
    marginHorizontal: 15,
    alignItems: "center",
    marginVertical: 50,
  },

  boutonsArea: {
    marginHorizontal: 15,
  },

  boutonGeneriqueStyle: {
    marginHorizontal: "1%",
    backgroundColor: Colors.lightBackground,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "48%",
  },

  boutonTexte: {
    textAlignVertical: "top",
    textAlign: "center",
    fontSize: 20,
  },

  boutonDuoStyle: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
});

export default globalStyles;
