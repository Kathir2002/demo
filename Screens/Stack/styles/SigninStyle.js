import { StyleSheet } from "react-native"

const SigninStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        height: "100%"
    },
    textInput: {
        height: 50,
        width: 250,
        marginLeft: "10%",
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10
    },
    errorText: {
        fontSize: 15,
        marginBottom: 20,
        marginLeft: 40,
        color: "white",
    },
    signinText: {
        color: "white",
        fontSize: 16,
        textDecorationLine: "underline"
    },

    button: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "80%",
        marginTop: 30,
        marginLeft: "30%"
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default SigninStyles