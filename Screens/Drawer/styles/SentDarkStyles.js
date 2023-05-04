import { StyleSheet } from "react-native";
import appColors from "../../../AppColors"

const SentStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: appColors.backgroundDarkColor
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
    in: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        width: "85%"
    },
    ic: {
        marginLeft: 15,
        marginTop: 10,
        position: "absolute",
        right: 90
    },
    v1: {
        flexDirection: "row",
        marginVertical: 10,
        width: "98%",
        borderBottomColor: appColors.borderColor,
        borderBottomWidth: 2,
        paddingHorizontal: 10
    },
    v2: {
        flexDirection: "column",
        marginTop: -7,
        marginHorizontal: 20,
    },
    flex: {
        marginVertical: "5%",
        flexDirection: "row",
        alignItems: "center"
    }
})

export default SentStyles