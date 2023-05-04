import { StyleSheet } from "react-native"
const SignupStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    textInput: {
        height: 50,
        width: "80%",
        marginLeft: "10%",
        marginBottom: "8%",
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    errorText: {
        fontSize: 15,
        marginLeft: 40,
        color: "white",
        marginBottom: 14
    },
    errorCheckText: {
        color: "white",
        fontSize: 15,
        marginLeft: 50,
        marginTop: 20
    },
    signinText: {
        color: "white",
        marginVertical: "10%",
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
        marginBottom: 10,
        marginTop: "20%",
        width: "40%",
        marginLeft: "30%"
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Text: {
        marginLeft: 30,
        fontWeight: "bold",
        color: "white",
        marginTop: 15,
        fontSize: 18,
        fontWeight: "bold"
    },
    radioButton: {
        height: 25,
        width: 25,
        backgroundColor: "white",
        borderRadius: 12.5,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonIcon: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: "black",
    },
    radioButtonText: {
        fontSize: 18,
        fontWeight: 600,
        marginLeft: 10,
        color: "white"
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 45,
        marginBottom: "5%"
    },
    btn: {
        backgroundColor: "transparent",
        borderColor: "white",
        borderWidth: 2,
        width: "80%",
        marginLeft: "10%",
        borderRadius: 10,
    }
})

export default SignupStyles 