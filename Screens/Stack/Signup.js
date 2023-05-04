
import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { Button, CheckBox, ThemeConsumer } from 'react-native-elements'
import * as yup from 'yup'
import Icon from "react-native-vector-icons/FontAwesome"
import { Header, Text } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios'
import DateTimePicker from '@react-native-community/datetimepicker'

const SignUp = () => {
    const navigation = useNavigation()
    const [userData, setUserData] = useState([{}])
    const [isSelected, setIsSelected] = useState(false)
    const [isLiked, setIsLiked] = useState([
        {
            id: '1', value: "true", name: "Male", selected: false
        },
        {
            id: 2, value: false, name: "Female", selected: false
        },
    ])
    const [open1, setopen1] = useState(false);
    const [value1, setValue1] = useState([]);
    const [item1, setItem1] = useState([
        {
            label: 'January',
            value: '1',
        },
        {
            label: 'February',
            value: '2',
        },
        {
            label: 'March',
            value: '3',
        },
        {
            label: 'April',
            value: '4',
        },
        {
            label: 'May',
            value: '5',
        },
        {
            label: 'June',
            value: '6',
        },
        {
            label: 'July',
            value: '7',
        },
        {
            label: 'August',
            value: '8',
        },
        {
            label: 'September',
            value: '9',
        },
        {
            label: 'October',
            value: '10',
        },
        {
            label: 'November',
            value: '11',
        },
        {
            label: 'December',
            value: '12',
        },
    ]);

    const [open2, setopen2] = useState(false);
    const [value2, setValue2] = useState([]);
    const [item2, setItem2] = useState([
        {
            label: '1',
            value: '1',
        },
        {
            label: '2',
            value: '2',
        },
        {
            label: '3',
            value: '3',
        },
        {
            label: '4',
            value: '4',
        },
        {
            label: '5',
            value: '5',
        },
        {
            label: '6',
            value: '6',
        },
        {
            label: '7',
            value: '7',
        },
        {
            label: '8',
            value: '8',
        },
        {
            label: '9',
            value: '9',
        },
        {
            label: '10',
            value: '10',
        },
        {
            label: '11',
            value: '11',
        },
        {
            label: '12',
            value: '12',
        },
        {
            label: '13',
            value: '13',
        },
        {
            label: '14',
            value: '14',
        },
        {
            label: '15',
            value: '15',
        },
        {
            label: '16',
            value: '16',
        },
        {
            label: '17',
            value: '17',
        },
        {
            label: '18',
            value: '18',
        },
        {
            label: '19',
            value: '19',
        },
        {
            label: '20',
            value: '20',
        },
        {
            label: '21',
            value: '21',
        },
        {
            label: '22',
            value: '22',
        },
        {
            label: '23',
            value: '23',
        },
        {
            label: '24',
            value: '24',
        },
        {
            label: '25',
            value: '25',
        },
        {
            label: '26',
            value: '26',
        },
        {
            label: '27',
            value: '27',
        },
        {
            label: '28',
            value: '28',
        },
        {
            label: '29',
            value: '29',
        },
        {
            label: '30',
            value: '30',
        },
        {
            label: '31',
            value: '31',
        },
    ]);

    const [open3, setopen3] = useState(false);
    const [value3, setValue3] = useState([]);
    const [item3, setItem3] = useState([
        {
            label: '1998',
            value: '1998',
        },
        {
            label: '1999',
            value: '1999',
        },
        {
            label: '2000',
            value: '2000',
        },
        {
            label: '2001',
            value: '2001',
        },
        {
            label: '2002',
            value: '2002',
        },
        {
            label: '2003',
            value: '2003',
        },
        {
            label: '2004',
            value: '2004',
        },
        {
            label: '2005',
            value: '2005',
        },
        {
            label: '2006',
            value: '2006',
        },
        {
            label: '2007',
            value: '2007',
        },
        {
            label: '2008',
            value: '2008',
        },
        {
            label: '2009',
            value: '2009'
        },
        {
            label: '2010',
            value: '2010',
        },
        {
            label: '2011',
            value: '2011',
        },
        {
            label: '2012',
            value: '2012',
        },
        {
            label: '2013',
            value: '2013',
        },
        {
            label: '2014',
            value: '2014',
        },
        {
            label: '2015',
            value: '2015',
        },
        {
            label: '2016',
            value: '2016',
        },
        {
            label: '2017',
            value: '2017',
        },
        {
            label: '2018',
            value: '2018',
        },
        {
            label: '2019',
            value: '2019',
        },
        {
            label: '2020',
            value: '2020',
        },
        {
            label: '2021',
            value: '2021',
        },
        {
            label: '2022',
            value: '2022',
        },
        {
            label: '2023',
            value: '2023',
        },
    ]);

    const [datePicker, setDatePicker] = useState(false)
    const [date, setDate] = useState(new Date())

    const onAddHandler = (values) => {

        let temp = [...userData]
        let d = { email: values.email, name: values.name.trim(), password: values.password, phone: values.phoneNumber }
        let data = [...temp, d]
        console.log("datz", data);
        setUserData(data)

        if ((data[0].checked === false) && (data[1].checked === false)) {
            Alert.alert("Please Accept the terms and conditions!")
        }
        else {
            axios.post("https://rncrud-2fe7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", values)
                .then(res => {
                    navigation.navigate("auth")
                })
                .catch(err => console.log(err))
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
        confirmPassword: yup
            .string()
            // .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .oneOf([yup.ref('password')], 'passwords do not match')
            .required("Confirm password is required"),

        phoneNumber: yup
            .string()
            .matches(/(\d){10}\b/, 'Enter the valid ph number')
            .matches("^[6-9][0-9]*$", 'Enter the valid phon number')
            .max(10)
            .min(10)
            .required('phone number is required'),

        name: yup
            .string()
            .max(32)
            .required("Name is required"),
        checkBox: yup
            .bool()
            .oneOf([true], 'Accept the Terms and Conditions'),
    })

    const onRadioBtnClick = (item) => {
        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id ? { ...isLikedItem, selected: true }
                : { ...isLikedItem, selected: false })
        setIsLiked(updatedState)
    }


    function onDateSelected(event, value) {
        setDate(value)
        setDatePicker(false)
    }

    const RadioButton = ({ onPress, selected, children }) => {
        return (
            <ThemeConsumer>
                {
                    ({ theme }) => (
                        <View style={theme.SignupStyles.radioButtonContainer}>
                            <TouchableOpacity onPress={onPress} style={theme.SignupStyles.radioButton}>
                                {selected ? <View style={theme.SignupStyles.radioButtonIcon} /> : null}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPress}>
                                <Text style={theme.SignupStyles.radioButtonText}>
                                    {children}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </ThemeConsumer>
        )
    }

    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <ScrollView>
                        <View onStartShouldSetResponder={() => { setopen1(false); setopen2(false); setopen3(false) }}>
                            <ImageBackground source={require("../../assetes/background.jpeg")} resizeMode="stretch" style={theme.SignupStyles.container}>
                                <Header backgroundColor='#6b5f4a' leftComponent={() => <Icon name="arrow-left" size={25} color="white" onPress={() => navigation.navigate("Home")} />} />
                                <Text h1 style={{ color: "white" }}>Sign Up</Text>
                                <Formik
                                    validationSchema={loginValidationSchema}
                                    initialValues={{ email: "", password: "", phoneNumber: "", confirmPassword: "", checkBox: false, name: "", }}
                                    onSubmit={values => onAddHandler(values)}>
                                    {({ handleChange, errors, touched, setFieldValue, handleBlur, handleSubmit, values, isValid }) => (
                                        <View style={{ justifyContent: "space-evenly", marginVertical: "10%", width: "90%", height: "60%" }}>
                                            <TextInput
                                                placeholderTextColor="white"
                                                name="email"
                                                placeholder='Email Address'
                                                style={theme.SignupStyles.textInput}
                                                onChangeText={(text) => (setFieldValue('email', text))}
                                                onBlur={handleBlur("email")}
                                                value={values.email}
                                                keyboardType="email-address" />
                                            {(errors.email && touched.email) &&
                                                <Text style={theme.SignupStyles.errorText}>{errors.email}</Text>
                                            }
                                            <TextInput
                                                placeholderTextColor="white"
                                                name="name"
                                                placeholder='Name'
                                                style={theme.SignupStyles.textInput}
                                                onChangeText={(text) => (setFieldValue('name', text))}
                                                onBlur={handleBlur("name")}
                                                value={values.name}
                                                keyboardType="default" />
                                            {(errors.name && touched.name) &&
                                                <Text style={theme.SignupStyles.errorText}>{errors.name}</Text>
                                            }
                                            <TextInput
                                                placeholderTextColor="white"
                                                name="password"
                                                placeholder='password'
                                                style={theme.SignupStyles.textInput}
                                                onChangeText={(text) => setFieldValue('password', text)}
                                                onBlur={handleBlur("password")}
                                                value={values.password}
                                                secureTextEntry
                                                keyboardType="default" />

                                            {(errors.password && touched.password) &&
                                                <Text style={theme.SignupStyles.errorText}>{errors.password}</Text>
                                            }

                                            <TextInput
                                                placeholderTextColor="white"
                                                name="comfirmPassword"
                                                placeholder='Confirm password'
                                                style={theme.SignupStyles.textInput}
                                                onChangeText={(text) => setFieldValue('confirmPassword', text)}
                                                onBlur={handleBlur("confirmPassword")}
                                                value={values.confirmPassword}
                                                secureTextEntry
                                                keyboardType="default" />

                                            {(errors.confirmPassword && touched.confirmPassword) &&
                                                <Text style={theme.SignupStyles.errorText}>{errors.confirmPassword}</Text>
                                            }

                                            <TextInput
                                                placeholderTextColor="white"
                                                name="phoneNumber"
                                                placeholder='Phone Number'
                                                style={theme.SignupStyles.textInput}
                                                onChangeText={(text) => (setFieldValue('phoneNumber', text))}
                                                onBlur={handleBlur("phoneNumber")}
                                                value={values.phoneNumber}
                                                keyboardType="number-pad" />

                                            {(errors.phoneNumber && touched.phoneNumber) &&
                                                <Text style={theme.SignupStyles.errorText}>{errors.phoneNumber}</Text>
                                            }

                                            {datePicker && (
                                                <DateTimePicker
                                                    value={date}
                                                    mode={'date'}
                                                    display={Platform.OS === 'android' ? 'spinner' : 'default'}
                                                    is24Hour={true}
                                                    onChange={onDateSelected}
                                                />
                                            )}

                                            {!datePicker && (
                                                <View style={{ margin: 10 }}>
                                                    <Button title='Date of Birth' buttonStyle={theme.SignupStyles.btn} onPress={setDatePicker} />
                                                </View>
                                            )}

                                            <Text style={theme.SignupStyles.Text}>Gender</Text>

                                            {isLiked.map((item) => (
                                                <View key={item.id} style={theme.SignupStyles.radioButtonContainer}>
                                                    <RadioButton onPress={() => onRadioBtnClick(item)} selected={item.selected} >
                                                        <Text style={theme.SignupStyles.radioButtonText}>{item.name}</Text>
                                                    </RadioButton>
                                                </View>

                                            ))}
                                            <Text h4 style={{ color: "white", marginBottom: "10%" }}>Select Date of Birth: </Text>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <View>
                                                    <View style={{ width: 90 }}>
                                                        <DropDownPicker
                                                            style={{ backgroundColor: "transparent", borderWidth: 2, borderColor: "white", }}
                                                            placeholderStyle={{ color: "white", fontSize: 16, fontWeight: 600 }}
                                                            schema={{
                                                                label: 'label',
                                                                value: 'value',
                                                            }}
                                                            dropDownDirection="TOP"
                                                            listMode='SCROLLVIEW'
                                                            open={open2}
                                                            value={value2}
                                                            placeholder="Date"
                                                            labelStyle={{ color: "white", borderTopWidth: 0 }}
                                                            containerStyle={{ borderTopColor: "transparent" }}
                                                            textStyle={{ color: "black", fontSize: 16, fontWeight: 800 }}
                                                            dropDownContainerStyle={{ backgroundColor: "#42b5d2", borderColor: "white", borderWidth: 2, }}
                                                            items={item2}
                                                            setOpen={setopen2}
                                                            setValue={setValue2}
                                                            setItems={setItem2}
                                                        />
                                                    </View>
                                                    <View>
                                                        <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>
                                                            Selected value : {value2}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View >
                                                    <View style={{ width: 118, marginRight: "5%" }}>
                                                        <DropDownPicker

                                                            style={{ backgroundColor: "transparent", borderWidth: 2, borderColor: "white", }}
                                                            placeholderStyle={{ color: "white", fontSize: 16, fontWeight: 600 }}
                                                            schema={{
                                                                label: 'label',
                                                                value: 'value',
                                                            }}
                                                            badgeColors='white'
                                                            placeholder="Month"
                                                            listMode='SCROLLVIEW'
                                                            dropDownDirection="TOP"
                                                            open={open1}
                                                            value={value1}
                                                            labelStyle={{ color: "white", borderTopWidth: 0 }}
                                                            containerStyle={{ borderTopColor: "transparent" }}
                                                            textStyle={{ color: "black", fontSize: 16, fontWeight: 800 }}
                                                            dropDownContainerStyle={{ backgroundColor: "#42b5d2", borderColor: "white", borderWidth: 2, }}
                                                            items={item1}
                                                            setOpen={setopen1}
                                                            setValue={setValue1}
                                                            setItems={setItem1}
                                                        />
                                                    </View>
                                                    <View>
                                                        <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>
                                                            Selected value : {value1}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <View style={{ width: 90 }}>
                                                        <DropDownPicker
                                                            listMode='SCROLLVIEW'
                                                            style={{ backgroundColor: "transparent", borderWidth: 2, borderColor: "white", }}
                                                            placeholderStyle={{ color: "white", fontSize: 16, fontWeight: 600 }}
                                                            schema={{
                                                                label: 'label',
                                                                value: 'value',
                                                            }}
                                                            dropDownDirection="TOP"
                                                            open={open3}
                                                            value={value3}
                                                            placeholder="Year"
                                                            labelStyle={{ color: "white", borderTopWidth: 0 }}
                                                            containerStyle={{ borderTopColor: "transparent" }}
                                                            textStyle={{ color: "black", fontSize: 16, fontWeight: 800 }}
                                                            dropDownContainerStyle={{ backgroundColor: "#42b5d2", borderColor: "white", borderWidth: 2, }}
                                                            items={item3}
                                                            setOpen={setopen3}
                                                            setValue={setValue3}
                                                            setItems={setItem3}
                                                        />
                                                    </View>
                                                    <View>
                                                        <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>
                                                            Selected value : {value3}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <CheckBox
                                                textColor="white"
                                                checkedColor='wheat'
                                                name="checkBox"
                                                containerStyle={{ width: "80%", backgroundColor: "transparent", marginLeft: "10%" }}
                                                value={isSelected}
                                                size={30}
                                                title={<Text style={{ color: "white", fontSize: 16 }}>Agree the terms and conditions.</Text>}
                                                onPress={() => setFieldValue("checkBox", !values.checkBox)}
                                                style={theme.SignupStyles.checkbox}
                                                values={values.checkBox}
                                                checked={values.checkBox}
                                            />
                                            {(errors.checkBox && touched.checkBox) &&
                                                <Text style={theme.SignupStyles.errorCheckText}>{errors.checkBox}</Text>
                                            }
                                            <Button titleStyle={theme.SignupStyles.buttonText} disabled={!isValid && !touched} buttonStyle={theme.SignupStyles.button} title='Register' onPress={handleSubmit} />
                                        </View>

                                    )}
                                </Formik>

                                <Text style={theme.SignupStyles.signinText} onPress={() => navigation.navigate("SignIn")} > Do you have an account?</Text>
                            </ImageBackground>
                        </View>
                    </ScrollView>
                )
            }
        </ThemeConsumer>
    )
}

export default SignUp