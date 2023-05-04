
import Icon from "react-native-vector-icons/FontAwesome"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Email from '../Screens/Tab/Email';
import Calender from '../Screens/Tab/Calender';
import Feed from '../Screens/Tab/Feed';
import More from '../Screens/Tab/More';

const Tab = createBottomTabNavigator();

const AppTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: 'green',
                tabBarActiveBackgroundColor: '#ADD8E6',
                tabBarActiveTintColor: 'white',
                tabBarStyle: { height: "6%", width: "100%" }
            }}
        >
            <Tab.Screen name='Email' component={Email} options={{
                tabBarIcon: () => {
                    return (
                        <Icon name="envelope-o" size={30} color="black"></Icon>
                    )
                }
            }} />
            <Tab.Screen name='Calender' component={Calender} options={{
                tabBarIcon: () => {
                    return (
                        <Icon name="calendar-o" size={30} color="black"></Icon>
                    )
                }
            }} />
            <Tab.Screen name='Feed' component={Feed} options={{
                tabBarIcon: () => {
                    return (
                        <Icon name="list-alt" size={30} color="black"></Icon>
                    )
                }
            }} />
            <Tab.Screen name='More' component={More} options={{
                tabBarIcon: () => {
                    return (
                        <Icon name="ellipsis-h" size={30} color="black"></Icon>
                    )
                }
            }} />
        </Tab.Navigator>
    )
}

export default AppTab


