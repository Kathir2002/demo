import { StyleSheet } from "react-native"
import appColors from "../../../AppColors"
export default InboxDarkStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white",
    },
    textFied: {
        color: appColors.textDarkColor,
        marginBottom: 5,
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    v1: {
        flexDirection: "row",
        marginVertical: 10,
        width: "95%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        paddingHorizontal: 8,
    },
    v2: {
        flexDirection: "column",
        marginLeft: 5,
    },
    flex: {
        marginVertical: "2%",
        flexDirection: "row",
        alignItems: "center",
    }
})
