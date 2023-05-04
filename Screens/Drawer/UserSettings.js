import { View, PermissionsAndroid, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, ThemeConsumer, Text, Avatar, Overlay } from 'react-native-elements'
import authContext from '../../store/appContext'
import { useNavigation } from '@react-navigation/native'
import SwitchBar from '../../utils/SwitchBar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'

const Profile = () => {
    const navigation = useNavigation()
    const { setIsAuth, userContextData } = useContext(authContext)
    const [visible, setVisible] = useState(false)
    const [cameraPhoto, setCameraPhoto] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png")

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    }
    console.log("UserData", userContextData)
    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options)
            setCameraPhoto(result.assets[0].uri)
        }
    }

    const openGallery = async () => {
        const result = await launchImageLibrary(options)
        setCameraPhoto(result.assets[0].uri)
    }

    const logOutHandler = () => {
        AsyncStorage.removeItem("loginUser")
        setIsAuth(false)
        navigation.navigate("SignIn")
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.UserSettingStyles.container}>
                        <TouchableOpacity onPress={() => setVisible(true)}>
                            <Avatar rounded source={{ uri: cameraPhoto }} style={{ width: 100, height: 100, }} />
                        </TouchableOpacity>
                        <View>
                            <Text style={theme.UserSettingStyles.text}>Email: {userContextData.email}</Text>
                            <Text style={theme.UserSettingStyles.text}>Name: {userContextData.name}</Text>
                            <Text style={theme.UserSettingStyles.text}>Phone Number: {userContextData.phoneNumber}</Text>
                            <Text style={theme.UserSettingStyles.text}>Dark Mode : <SwitchBar /></Text>
                        </View>
                        <Button title="Logout" onPress={logOutHandler} />
                        <Overlay overlayStyle={theme.UserSettingStyles.overlay} visible={visible} onBackdropPress={() => setVisible(false)} >
                            <View>
                                <Text h4>Profile  photo</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: "15%", marginHorizontal: "20%" }}>
                                <Pressable onPress={openCamera}>
                                    <Icon name="camera" size={30} color="black" />
                                    <Text>Camera</Text>
                                </Pressable>
                                <Pressable onPress={openGallery}>
                                    <Icon name="image" size={30} color="black" />
                                    <Text>Camera</Text>
                                </Pressable>
                            </View>
                            <Button buttonStyle={{ width: "50%", marginHorizontal: "25%" }} title="Okay" onPress={() => setVisible(false)} />
                        </Overlay>
                    </View>
                )
            }
        </ThemeConsumer>
    )
}

export default Profile




