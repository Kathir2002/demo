import { useState, useEffect } from 'react';
import { View } from 'react-native'
import { ThemeProvider, Image, Text } from 'react-native-elements';
import MainRoute from './route';
import authContext from '../store/appContext';
import dark from "../darkMode"
import Light from "../Theme"

const Splash = () => {
    const SplashScreen = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                <Image style={{ width: 220, height: 220 }} source={require("..//assetes/333.gif")} />
                <Text h3 style={{ color: "gray", marginLeft: -10, marginTop: -15 }}>Outlook</Text>
            </View>
        )
    }

    const [isAuth, setIsAuth] = useState(false)
    const [userContextData, setUserContextData] = useState({ name: "", email: "", phoneNumber: "" })
    const [isEnabled, setIsEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [isFinger, setIsFinger] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
    }, [])

    return (
        <authContext.Provider value={{
            isAuth: isAuth,
            setIsAuth: setIsAuth,
            userContextData: userContextData,
            setUserContextData: setUserContextData,
            isEnabled: isEnabled,
            setIsEnabled: setIsEnabled,
            isFinger,
            setIsFinger
        }}>
            <ThemeProvider theme={isEnabled ? dark : Light}>
                {isLoading ? <SplashScreen /> : <MainRoute />}
            </ThemeProvider>
        </authContext.Provider>
    )
}

export default Splash