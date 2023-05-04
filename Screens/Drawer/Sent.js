import { Image, View, ScrollView, TouchableOpacity } from 'react-native'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { SearchBar, Avatar, ThemeConsumer } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Text } from "react-native-elements"
import authContext from '../../store/appContext'
import SpeechRecognition from '../../utils/SpeechRecognition';
const Sent = () => {
    const Loader = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image style={{ width: 220, height: 220 }} source={require("../../assetes/loading.gif")} />
            </View>
        )
    }

    const [mailData, setMailData] = useState([])
    const [search, setSearch] = useState("")
    const { isEnabled } = useContext(authContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            let res = await axios.get("https://rncrud-2fe7f-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json")
            setMailData(Object.values(res.data))
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const searchFunc = e => {
        setSearch(e)
    }
    return (
        loading ? <Loader /> : <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.SentStyles.body}>
                        <ScrollView>
                            <View style={theme.SentStyles.flex}>
                                <SearchBar scrollEnabled placeholder="Type Here ..." onChangeText={searchFunc} value={search} round lightTheme containerStyle={{ backgroundColor: "transparent" }} inputContainerStyle={{ backgroundColor: "white", borderWidth: 1, borderColor: "black", width: 340 }} />
                                <SpeechRecognition setContent={searchFunc} />
                            </View>
                            {mailData && mailData.map((res, i) => {
                                let searchval = search.toLowerCase().replace(/\s/, "")
                                let outval = (res.subject).toLowerCase().replace(/\s/, "")
                                if (outval.includes(searchval)) {
                                    return (
                                        <View style={theme.SentStyles.v1} key={i}>
                                            <TouchableOpacity activeOpacity={.6} >
                                                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                                    <Avatar
                                                        source={{ uri: res?.imageSource }}
                                                        rounded
                                                        size={60} />
                                                    <View style={theme.SentStyles.v2}>
                                                        <Text style={isEnabled ? { color: "white" } : { color: "#202020" }} h4> {res?.subject}</Text>
                                                        <Text style={isEnabled ? { color: "white", marginVertical: 10 } : { color: "#202020", marginVertical: 10 }}>{res?.content}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            })}
                        </ScrollView>
                    </View >
                )
            }
        </ThemeConsumer>
    )
}


export default Sent