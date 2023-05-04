import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useEffect, useState } from 'react';
import NewMail from '../Screens/Drawer/NewMail';
import HomeScreen from '../Screens/Stack/Home';
import MailDetail from '../Screens/Stack/MailDetails';
import SignIn from '../Screens/Stack/Signin';
import SignUp from '../Screens/Stack/Signup';
import DrawerFile from './drawerStack';
import authContext from '../store/appContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Splash';
import Biometric from '../utils/Biometrics';

const MainRoute = () => {
    const { isAuth, setIsAuth, setIsFinger, isFinger } = useContext(authContext)

    useEffect(() => {
        AsyncStorage.getItem("loginUser")
            .then((res) => {
                if (res !== null) {
                    setIsAuth(res)
                }
                else {
                    setIsFinger(false)
                }
            })
    })
    return (
        // isAuth ? <AuthScreens /> : <HomeScreens />
        isFinger ? <BiometricScreen /> : (isAuth ? <AuthScreens /> : <HomeScreens />)
    )
}

const HomeScreens = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const BiometricScreen = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Biometric" component={Biometric} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const AuthScreens = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='DrawerFile' component={DrawerFile} />
                <Stack.Screen name='Details' component={MailDetail} />
                <Stack.Screen name='New Message' component={NewMail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute