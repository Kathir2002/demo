import { StyleSheet } from "react-native"
import appColors from "../../../AppColors"

export default InboxStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: appColors.backgroundDarkColor,
    },
    textFied: {
        color: appColors.textLightColor,
        marginBottom: 5,
    },
    text: {
        color: appColors.textLightColor,
        fontSize: 30,
        fontWeight: "bold",
    },
    in: {
        borderColor: appColors.textLightColor,
        borderWidth: 1,
        borderRadius: 15,
        width: "85%",
    },
    ic: {
        marginLeft: 15,
        marginTop: 10,
        position: "absolute",
        right: 90,
    },
    v1: {
        flexDirection: "row",
        marginVertical: 10,
        width: "95%",
        borderBottomColor: appColors.textLightColor,
        borderBottomWidth: 1,
        paddingHorizontal: 8,
    },
    v2: {
        flexDirection: "column",
        marginLeft: 5,
    },
    flex: {
        marginVertical: "5%",
        flexDirection: "row",
        alignItems: "center",
    }
})