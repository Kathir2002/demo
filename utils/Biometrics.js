import React, { useState, useContext } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, Pressable, Image } from 'react-native';
import BiometricID from 'react-native-biometric-id';
import authContext from '../store/appContext';
import { useNavigation } from '@react-navigation/native';

const Biometric = () => {
    const navigation = useNavigation()
    const loginHandler = () => {
        navigation.navigate("SignIn")
    }
    const { setIsFinger } = useContext(authContext)
    const [authMessage, setAuthMessage] = useState('Authenticate to access your account');

    const handleBiometricAuth = () => {
        BiometricID.authenticate(authMessage)
            .then(() => {
                setAuthMessage('Authentication successful');
                setIsFinger(false)
            })
            .catch((error) => {
                console.log(`Authentication error: ${error}`);
                setAuthMessage(`Authentication error: ${error}`);
            });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            {/* <Text>{authMessage}</Text> */}
            <Pressable onPress={handleBiometricAuth}>
                <Image source={require("../assetes/fingerprint.gif")} style={{ height: 300, width: 300 }} />
            </Pressable>
            <Button onPress={loginHandler} title='Login' />
        </View>
    );
};

export default Biometric;
