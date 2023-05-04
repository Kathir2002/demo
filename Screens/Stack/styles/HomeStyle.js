import { StyleSheet } from "react-native";
const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: "5%"
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    description: {
        marginTop: 20,
        textAlign: 'center',
        color: '#666',
        paddingHorizontal: 30,
        lineHeight: 25,
    },
});

export default HomeStyles