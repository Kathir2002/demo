import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeConsumer } from 'react-native-elements';
import Drafts from '../Drawer/Drafts';

export default function HomeScreen() {
    const navigation = useNavigation()

    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.HomeStyles.container}>
                        <Image style={{ height: "10%", width: "20%" }} source={require("../../assetes/outkook-logo.png")} />
                        <Text style={theme.HomeStyles.title}>Welcome to Outlook</Text>
                        <Drafts />
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <TouchableOpacity
                                style={theme.HomeStyles.button}
                                onPress={() => { navigation.navigate('SignIn') }}
                            >
                                <Text style={theme.HomeStyles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={theme.HomeStyles.button}
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                <Text style={theme.HomeStyles.buttonText}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={theme.HomeStyles.description}>
                            MyApp is the best way to manage your tasks and stay organized.
                        </Text>
                    </View>
                )
            }
        </ThemeConsumer>
    );
}
