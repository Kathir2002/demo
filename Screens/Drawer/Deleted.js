import React, { useContext, useState } from 'react';
import { VirtualizedList, View, Text, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-elements';
import authContext from '../../store/appContext';

const data = [
    {
        key: 1,
        Mail: "kathir@gmail.com",
        Name: 'Kathir',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },

    {
        key: 3,
        Mail: "axiosupdate@gmail.com",
        Name: 'Axios Update',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    }, {
        key: 2,
        Mail: "youtube@gmail.com",
        Name: 'Youtube',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 4,
        Mail: "cricbuzz@gmail.com",
        Name: 'Cricbuzz',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 5,
        Mail: "greeksforgeeks@gmail.com",
        Name: 'GreeksforGeeks',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 6,
        Mail: "flipkart@gmail.com",
        Name: 'Flipkart',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 7,
        Mail: "dell@gmail.com",
        Name: 'Dell',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 8,
        Name: 'cricket',
        Mail: "cricket@gmail.com",
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 9,
        Mail: "windowaupdate@gmail.com",
        Name: 'Windows Update',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 10,
        Mail: "mailto:tom@gmail.com",
        Name: 'Tom',
        Message: 'helloThis is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 11,
        Mail: "flipkart@gmail.com",
        Name: 'Flipkart',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
    {
        key: 12,
        Mail: "flip@gmail.com",
        Name: 'Flip',
        Message: 'hello,This is documentation for React Native Elements 3.4.2, which is no longer actively maintained.For up-to- documentation, see the latest version (4.0.0-rc.7).',
    },
];

const Item = ({ Mail, Message }) => {
    const { isEnabled } = useContext(authContext)
    return (
        <View style={isEnabled ? { flex: 1, margin: 10, borderColor: "white", borderWidth: 1, padding: 5 }
            : { flex: 1, margin: 10, borderColor: "black", borderWidth: 1, padding: 5 }
        }>
            <View style={{ flexDirection: "column" }}>
                <Avatar
                    source={require("../../assetes/user.png")} rounded size={40} />
                <View style={{ flexDirection: "column" }}>
                    <Text style={isEnabled ? { fontSize: 20, color: "white" } : { fontSize: 20, color: "black" }}>{Mail}</Text>
                    <Text style={isEnabled ? { fontSize: 20, color: "white" } : { fontSize: 20, color: "black" }}>{Message}</Text>
                </View>
            </View>
        </View>
    )
}


const Deleted = () => {
    const { isEnabled } = useContext(authContext)
    const [numColumns, setNumColumns] = useState(2);
    const getItemCount = (data) => {
        return Math.ceil(data.length / numColumns);
    };

    const getItem = (data, index) => {
        const rowData = [];
        for (let i = 0; i < numColumns; i++) {
            const dataIndex = index * numColumns + i;
            if (dataIndex < data.length) {
                rowData.push(data[dataIndex]);
            }
        }
        return rowData;
    };

    const RenderItem = ({ item }) => {
        return (
            <View style={isEnabled ? { flexDirection: 'row', backgroundColor: "#202020" } : { flexDirection: "row", backgroundColor: "white" }}>
                {item.map((dataItem) => {
                    return <Item key={dataItem.key} Mail={dataItem.Mail} image={dataItem?.image} Message={dataItem.Message} />;
                })}
            </View>
        );
    };

    return (
        <VirtualizedList
            data={data}
            getItemCount={getItemCount}
            getItem={getItem}
            renderItem={RenderItem}
            keyExtractor={(item) => item[0].key}
            onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                const newNumColumns = Math.floor(width / 160);
                setNumColumns(newNumColumns);
            }}
            ListFooterComponent={<ActivityIndicator />}

        />

    );
};

export default Deleted;