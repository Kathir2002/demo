import { View, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { Avatar, ThemeConsumer } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup'
import { Formik } from 'formik'
import { Text } from 'react-native-elements';
import Feed from '../Tab/Feed';
import authContext from '../../store/appContext';
import SpeechRecognition from '../../utils/SpeechRecognition';

const NewMessage = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [content, setContent] = useState('')
    const [mailData1, setMailData1] = useState({})
    const { isEnabled } = useContext(authContext)
    const onAddHandler = async (values) => {
        let d = { email: values.mailID, subject: values.subject, content: content, imageSource: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }
        setMailData1(d)
        try {
            await axios.post("https://rncrud-2fe7f-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json", d)
            navigation.navigate("Sent")
        } catch (e) {
            console.log(e);
        }

        axios.post('https://smiling-cap-ray.cyclic.app/send-email', {
            from: 'testdemomailuser@gmail.com',
            to: values.email,
            subject: values.subject,
            content: content
        })
            .then(response => {
                console.log("hi", response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const update = (e) => {
        setContent(e)
    }
    const mailValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("please enter valid email")
            .required("Email Address is required"),
        subject: yup
            .string()
            .required("Subject is required")
            .min(5),
    })
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.NewMailStyles.container}>
                        <View style={theme.NewMailStyles.header}>
                            <Icon style={{ marginHorizontal: "3%" }} name='close' size={30} color="gray" onPress={() => navigation.goBack()} />
                            <Avatar rounded size={40} source={require("../../assetes/outlook.jpg")} />
                            <View style={{ marginRight: "3%" }}>
                                <Text h4>New Message</Text>
                                <Text>testdemomailuser@gmail.com</Text>
                            </View>
                        </View>
                        <View style={theme.NewMailStyles.background}
                        >
                            <Formik
                                validationSchema={mailValidationSchema}
                                initialValues={{ subject: "", email: "" }}
                                onSubmit={values => onAddHandler(values)}>
                                {({ errors, touched, setFieldValue, handleBlur, handleSubmit, values, isValid }) => (
                                    <View style={{ flex: 1 }}>
                                        <View style={theme.NewMailStyles.textInput}>
                                            <Text h4 style={theme.NewMailStyles.colors}>To: </Text>
                                            <TextInput
                                                name="email"
                                                value={values.email}
                                                style={theme.NewMailStyles.email}
                                                onChangeText={(text) => setFieldValue('email', text)}
                                                onBlur={handleBlur("email")}
                                                keyboardType='email-address'
                                            />
                                            {(errors.email && touched.email) &&
                                                <Text style={theme.NewMailStyles.errorText}>{errors.email}</Text>
                                            }
                                        </View>
                                        <View style={theme.NewMailStyles.textInput1}>
                                            <TextInput
                                                name="subject"
                                                placeholder='Subject'
                                                style={theme.NewMailStyles.inp}
                                                onChangeText={(text) => setFieldValue('subject', text)}
                                                onBlur={handleBlur("subject")}
                                                value={values.subject}
                                                placeholderTextColor={isEnabled ? "white" : "black"}
                                                keyboardType="default" />

                                            {(errors.subject && touched.subject) &&
                                                <Text style={theme.NewMailStyles.errorText}>{errors.subject}</Text>
                                            }
                                        </View>
                                        <Feed content={content} setContent={update} />
                                        <SpeechRecognition setContent={update} />
                                        <Icon style={{ marginLeft: 360, marginVertical: "10%" }} name='md-send-sharp' color={isEnabled ? "white" : "#202020"} size={30} onPress={handleSubmit} disabled={!isValid} />
                                    </View>
                                )}
                            </Formik>
                        </View >
                        <View>
                        </View>
                    </View>
                )
            }
        </ThemeConsumer>
    )
}

export default NewMessage

