import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, View, ScrollView, Modal, Image } from "react-native";
import { Button, Text, ThemeConsumer } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import authContext from "../../store/appContext"
const MailDetail = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { isEnabled } = useContext(authContext)
    const res = route.params
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <ScrollView style={theme.MailDetailsStyles.box} >
                        <Icon name="arrow-left" size={30} color={isEnabled ? "white" : "#202020"} style={theme.MailDetailsStyles.icon} onPress={() => navigation.goBack()} />
                        <View style={theme.MailDetailsStyles.container}>
                            <View>
                                <Text style={isEnabled ? { color: "white" } : { color: "#202020" }} h1>{res?.name}</Text>
                            </View>
                            <View>
                                <Image source={{ uri: res?.image }} style={theme.MailDetailsStyles.image} />
                            </View>
                            <View>
                                <Text style={theme.MailDetailsStyles.content}>{res?.content}</Text>
                            </View>
                        </View>
                        <View style={theme.MailDetailsStyles.btnContainer}>
                            <Button buttonStyle={theme.MailDetailsStyles.btn} title="Close" onPress={() => navigation.goBack()} />
                            <Button buttonStyle={theme.MailDetailsStyles.btn} title="Reply" onPress={() => navigation.navigate("New Message", res)} />
                        </View>
                    </ScrollView>
                )
            }
        </ThemeConsumer>
    )
}
export default MailDetail

