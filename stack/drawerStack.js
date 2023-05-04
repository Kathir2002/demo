
import Icon from "react-native-vector-icons/FontAwesome"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inbox from '../Screens/Drawer/Inbox';
import Drafts from '../Screens/Drawer/Drafts';
import Sent from '../Screens/Drawer/Sent';
import Group from '../Screens/Drawer/Group';
import Deleted from '../Screens/Drawer/Deleted';
import AppTab from "./tabPage";
import Profile from "../Screens/Drawer/UserSettings";
import NewMessage from "../Screens/Drawer/NewMessage";

const Drawer = createDrawerNavigator();

const DrawerFile = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: "grey",
                shadowColor: "green"
            },
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "darkred",
            drawerInactiveTintColor: "white",
            drawerInactiveBackgroundColor: "grey"
        }}
        >

            <Drawer.Screen name='Outlook' component={AppTab} />

            <Drawer.Screen name='inbox' component={Inbox} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='envelope' size={25} color='white'></Icon>
                    )
                }
            }} />
            <Drawer.Screen name='New Message' component={NewMessage} options={{
                headerShown: false,
                drawerIcon: () => {
                    return (
                        <Icon name='comment-o' size={25} color='white'></Icon>
                    )
                }
            }} />
            <Drawer.Screen name='drafts' component={Drafts} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='file' size={25} color='white'></Icon>
                    )
                }
            }} />

            <Drawer.Screen name='Sent' component={Sent} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='send-o' size={25} color='white'></Icon>
                    )
                }
            }} />
            <Drawer.Screen name='groups' component={Group} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='group' size={25} color='white'></Icon>
                    )
                }
            }} />
            <Drawer.Screen name='deleted' component={Deleted} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='trash-o' size={25} color='white'></Icon>
                    )
                }
            }} />
            <Drawer.Screen name='User Settings' component={Profile} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='gear' size={25} color='white'></Icon>
                    )
                }
            }} />
        </Drawer.Navigator>
    )
}
export default DrawerFile