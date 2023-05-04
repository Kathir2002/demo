import { StyleSheet } from "react-native"
import appColors from "../../../AppColors"

const NewMailStyles = StyleSheet.create({
    background: {
        flex: 1,
    },
    colors: {
        color: appColors.textLightColor
    },
    container: {
        backgroundColor: "#202020",
        flex: 1,
        zIndex: 2,
        width: "100%",
    },
    errorText: {
        fontSize: 15,
        marginLeft: 40,
        color: appColors.errorDarkTextColor,
        fontWeight: 700,
        marginBottom: 14
    },
    email: {
        flexDirection: "row",
        color: appColors.textLightColor,
        width: "90%",
        borderBottomColor: appColors.textLightColor,
        fontWeight: "bold",
        fontSize: 18,
        borderBottomWidth: 1,
        alignItems: "center",
        marginHorizontal: 5,
        marginTop: 10,
    },
    textInput: {
        flexDirection: "row",
        width: "90%",
        color: "black",
        alignItems: "center",
        marginHorizontal: 5,
        marginTop: 10,
    },
    textInput1: {
        width: "100%",
    },
    inp: {
        color: appColors.textLightColor,
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: "10%",
        borderBottomWidth: 1,
        borderColor: appColors.textLightColor,
        padding: 5,
        width: "100%",
        margin: "3%"
    },
    header: {
        backgroundColor: appColors.backgroundLightColor,
        flexDirection: "row",
        alignItems: "center"
    },
    fields: {
        borderWidth: 2,
        borderColor: "black",
        color: "black",
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: "10%",
    }
})

export default NewMailStyles