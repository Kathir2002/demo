import React, { useContext, useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import authContext from '../store/appContext';

const SwitchBar = () => {
    const { isEnabled, setIsEnabled } = useContext(authContext)


    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
    }

    return (
        <View>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

export default SwitchBar;