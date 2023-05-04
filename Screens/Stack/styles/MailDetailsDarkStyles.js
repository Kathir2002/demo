import { StyleSheet } from "react-native"
import appColors from "../../../AppColors"

const MailDetailsStyles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: appColors.backgroundDarkColor
    },
    image: {
        height: 200,
        width: 200,
        marginHorizontal: "15%",
        marginVertical: "5%"
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        fontSize: 18,
        padding: 10,
        fontWeight: 600,
        color: appColors.textLightColor
    },
    btn: {
        backgroundColor: "blue",
        width: 70,
        marginVertical: 30
    },
    icon: {
        margin: 10
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})

export default MailDetailsStyles