import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Focused from './Focused';
import Others from './Others';

const Email = () => {
    const TopTab = createMaterialTopTabNavigator()
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Focused" component={Focused} />
            <TopTab.Screen name="Others" component={Others} />
        </TopTab.Navigator>
    )
}

export default Email