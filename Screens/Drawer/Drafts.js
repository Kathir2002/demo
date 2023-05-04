

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

const TextCarousel = ({ data }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % data.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <Text style={{ fontSize: 25, fontWeight: 800, color: "gray", }}>{data[index]}</Text>
    );
};

const Drafts = () => {
    const data = ['Fast', 'Secure', 'Reliable', 'Scalable'];
    return (
        <View>
            <TextCarousel data={data} />
        </View>
    );
};

export default Drafts;
