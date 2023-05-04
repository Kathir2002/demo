import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { Formik } from 'formik'
import { Button, Header, Text, ThemeConsumer } from 'react-native-elements'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/FontAwesome"
import authContext from '../../store/appContext'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
    const { isAuth, setIsAuth, userContextData, setUserContextData } = useContext(authContext)

    const navigation = useNavigation()
    const [userData, setUserData] = useState([])
    const [userDataKey, setUserDataKey] = useState([])
    const [fullData, setFullData] = useState([])
    const [key, setKey] = useState("")
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get("https://rncrud-2fe7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
            setUserDataKey(Object.keys(res.data))
            setFullData(res.data)
            setUserData(Object.values(res.data))
        } catch (error) {
            console.log(error);
        }
    }

    const onCheckHandler = (values) => {
        let valid = true
        userDataKey.map(async (key) => {
            if (fullData[key].email === values.email) {
                setKey(key)

                const data = await axios.get(`https://rncrud-2fe7f-default-rtdb.asia-southeast1.firebasedatabase.app/users/${key}.json`)
                setUserContextData(data.data)
            }
        })

        userData.map((res) => {
            if ((res?.email === values.email) && (res?.password === values.password)) {
                setIsAuth(true)
                AsyncStorage.setItem("loginUser", JSON.stringify(true))
                setUserContextData({})
                navigation.navigate("DrawerFile")
                valid = false
            }
        })
        if (valid) {
            Alert.alert("Please Enter the valid credentials!")
        }
    }


    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("please enter valid email")
            .required("Email Address is required"),
        password: yup
            .string()
            .min(8, ({ min }) => `password must be at least ${min} characters`)
            .required('password is required'),
        actualPrice: yup
            .number()
            .required("Must be a number"),
        sellingPrice: yup
            .number()
            .required("Must be a number")
            .moreThan(yup.ref("actualPrice"), "selling Price is must be more than Actual Price")
    })
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <ImageBackground source={require("../../assetes/background.jpeg")} resizeMode="cover" style={theme.SigninStyles.container}>
                    <View style={theme.SigninStyles.container}>
                        <Header backgroundColor='#6b5f4a' leftComponent={() => <Icon name="arrow-left" size={25} color="white" onPress={() => navigation.navigate("Home")} />} />
                        <Text h1 style={{ color: "white" }}>Sign In</Text>

                        <Formik
                            validationSchema={loginValidationSchema}
                            initialValues={{ email: "", password: "", actualPrice: "", sellingPrice: "" }}
                            onSubmit={values => onCheckHandler(values)}>
                            {({ errors, touched, setFieldValue, handleBlur, handleSubmit, values, isValid }) => (
                                <View style={{ width: "100%", height: "60%", justifyContent: "center" }}>
                                    <TextInput
                                        placeholderTextColor="white"
                                        name="email"
                                        placeholder='Email Address'
                                        style={theme.SigninStyles.textInput}
                                        onChangeText={(e) => (setFieldValue('email', e))}
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                                        keyboardType="email-address" />

                                    {(errors.email && touched.email) &&
                                        <Text style={theme.SigninStyles.errorText}>{errors.email}</Text>
                                    }
                                    <TextInput
                                        placeholderTextColor="white"
                                        name="password"
                                        placeholder='password'
                                        style={theme.SigninStyles.textInput}
                                        onChangeText={(text) => setFieldValue('password', text)}
                                        onBlur={handleBlur("password")}
                                        value={values.password}
                                        secureTextEntry
                                        keyboardType="default" />
                                    {(errors.password && touched.password) &&
                                        <Text style={theme.SigninStyles.errorText}>{errors.password}</Text>
                                    }

                                    <TextInput
                                        placeholderTextColor="white"
                                        name="actualPrice"
                                        placeholder='Actual Price'
                                        style={theme.SigninStyles.textInput}
                                        onChangeText={(text) => (setFieldValue('actualPrice', text))}
                                        onBlur={handleBlur("actualPrice")}
                                        value={values.actualPrice}
                                        keyboardType="numeric" />

                                    {(errors.actualPrice && touched.actualPrice) &&
                                        <Text style={theme.SigninStyles.errorText}>{errors.actualPrice}</Text>
                                    }
                                    <TextInput
                                        placeholderTextColor="white"
                                        name="sellingPrice"
                                        placeholder='Selling Price'
                                        style={theme.SigninStyles.textInput}
                                        onChangeText={(text) => (setFieldValue('sellingPrice', text))}
                                        onBlur={handleBlur("sellingPrice")}
                                        value={values.sellingPrice}
                                        keyboardType="number-pad" />

                                    {(errors.sellingPrice && touched.sellingPrice) &&
                                        <Text style={theme.SigninStyles.errorText}>{errors.sellingPrice}</Text>
                                    }

                                    <TouchableOpacity style={theme.SigninStyles.button} disabled={!isValid} title={"Login"} onPress={handleSubmit}>
                                        <Text style={theme.SigninStyles.buttonText}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                        <Text style={theme.SigninStyles.signinText} onPress={() => navigation.navigate("SignUp")} > Do you don't have an account?</Text>
                    </View >
                </ImageBackground >
            )
            }
        </ThemeConsumer>
    )
}

export default SignIn
