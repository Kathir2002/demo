import { StyleSheet } from "react-native"
import appColors from "../../../AppColors"
const NewMailStyles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        backgroundColor: "white",
        flex: 1,
        width: "100%",
    },
    colors: {
        color: appColors.textDarkColor
    },
    errorText: {
        fontSize: 15,
        marginLeft: 40,
        color: appColors.errorLightTextColor,
        fontWeight: 700,
        marginBottom: 14
    },
    email: {
        flexDirection: "row",
        color: "black",
        width: "90%",
        borderBottomColor: appColors.textDarkColor,
        borderBottomWidth: 1,
        fontWeight: "bold",
        fontSize: 18,
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
        color: "black",
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: "10%",
        borderBottomWidth: 1,
        borderColor: "black",
        padding: 5,
        width: "100%",
        margin: "3%"
    },
    header: {
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