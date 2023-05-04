import { StyleSheet } from "react-native"
import appColors from "../../../AppColors"
const UserSettingStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.backgroundDarkColor
    },
    text: {
        color: appColors.textLightColor,
        fontSize: 16,
        marginBottom: 10,
    },
    overlay: {
        width: "70%",
        height: "30%"
    },
    overlayText: {
        color: appColors.textLightColor
    }
})

export default UserSettingStyles