
import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, VirtualizedList, ActivityIndicator, } from "react-native";
import { Avatar, ThemeConsumer, SearchBar, Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import SpeechRecognition from "../../utils/SpeechRecognition";
const textTruncate = (str, length, ending) => {
    if (length == null) {
        length = 90;
    }
    if (ending == null) {
        ending = '....';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};


const Inbox = () => {
    const Loader = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image style={{ width: 220, height: 220 }} source={require("../../assetes/loading.gif")} />
            </View>
        )
    }
    const navigation = useNavigation()
    const [search, setSearch] = useState("")

    // let InboxStyles = isEnabled ? InboxLightStyles : InboxDarkStyles
    const [mailInboxData, setMailInboxData] = useState([{
        id: 1,
        name: "Quora Digest",
        mailID: "quoradigest@gmail.com",
        image: "https://img1.pnghut.com/1/4/14/aqeTwEyKJV/social-media-quora-symbol-logo-red.jpg",
        content: `Quora Digest is an email sent by Quora which contains answers which Quora thinks you might like to see. the answers are a mix of programatically generated and hand-picked from globally popular topics.`
    },
    {
        id: 2,
        name: "Stack OverFlow",
        mailID: "stackoverflow@gmail.com",
        image: "https://media.wired.com/photos/5926db217034dc5f91becd6b/master/w_1904,c_limit/so-logo-s.jpg",
        content: `Our public platform serves 100 million people every month, making it one of the most popular websites in the world. Our asynchronous knowledge management and collaboration offering, Stack Overflow for Teams, is transforming how people work`
    },
    {
        id: 3,
        name: "Discord",
        mailID: "discord@gmail.com",
        image: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png",
        content: `Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.`
    },
    {
        id: 4,
        name: "Netlify",
        mailID: "netlify@gmail.com",
        image: "https://jeancochrane.com/static/images/blog/netlify-identity-dealbreakers/netlify-logo.png",
        content: "Get started quickly with one of these templates. Click to connect your Git provider. Netlify will clone the repository and deploy your new site automatically"
    },
    {
        id: 5,
        name: "social",
        mailID: "social@gmail.com",
        image: "https://cryptologos.cc/logos/chatcoin-chat-logo.png",
        content: `Social is a space that blends the best of the office and the café. Combining work and play, it's an urban hangout designed to take you offline while still keeping you connected. Social is a collaborative workspace, a hub for artists and innovators.`
    },
    {
        id: 6,
        name: "Ticket Admin",
        mailID: "ticketadmin@gmail.com",
        image: "https://thumbs.dreamstime.com/z/eye-inscription-admin-icon-outline-style-vector-web-design-isolated-white-background-179719901.jpg",
        content: "Solve customer support tickets via web, email, phone, SMS, and social media— all in one place"
    },
    {
        id: 7,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 8,
        name: "Github",
        mailID: "github@gmail.com",
        image: "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 9,
        name: "Cricbuzz",
        mailID: "cricbuzz@gmail.com",
        image: "https://yt3.ggpht.com/-J4khS4jw9D8/AAAAAAAAAAI/AAAAAAAAAAA/U-_JejjhU1M/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 10,
        name: "Open AI",
        mailID: "openai@gmail.com",
        image: "https://static.startuptalky.com/2021/01/open-AI-Side-Projects-of-Elon-Musk.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 11,
        name: "Amazon",
        mailID: "amazon@gmail.com",
        image: "https://www.tripfiction.com/wp-content/uploads/2016/08/1920x1080-brands-amazon-logo.jpg",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 12,
        name: "FlipKart",
        mailID: "flipkart@gmail.com",
        image: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 13,
        name: "Google",
        mailID: "google@gmail.com",
        image: "https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 14,
        name: "Youtube",
        mailID: "youtube@gmail.com",
        image: "https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 15,
        name: "Paytm",
        mailID: "paytm@gmail.com",
        image: "https://logosmarcas.net/wp-content/uploads/2020/11/Paytm-Logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 16,
        name: "Phonepe",
        mailID: "phonepe@gmail.com",
        image: "https://successpact.com/wp-content/uploads/2020/03/phonepe.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 17,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 18,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 19,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 20,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 21,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 22,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 23,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 24,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 25,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 26,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 27,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 28,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 29,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    },
    {
        id: 30,
        name: "Upgrad",
        mailID: "upgrad@gmail.com",
        image: "https://servicesdown.in/img/upgrad-logo.png",
        content: "Free Courses are a unique ecosystem within upGrad to help you stay ahead of the curve and experience a part of upGrad's learning experience free of cost. You can choose courses from Business Basics, Data Science, Marketing, Machine Learning & Technology and build your foundational knowledge over a couple of hours. You will have access to Cutting Edge Content that is entirely Self-Paced, a Live Discussion Forum to ask your questions and to interact with others in your class, and a Certificate on successful completion of the course, free of cost."
    }
    ])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let arr = []
        for (i = 0; i < 3; i++) {
            arr.push(mailInboxData[i])
        } setData([...arr])
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    const onEndReached = () => {
        let newArr = [];
        for (i = 0; i < 3; i++) {
            newArr.push(mailInboxData[data.length + i + 1])
        }
        setData((prev) =>
            [...prev, ...newArr])
    }

    const searchFunc = (e) => {
        setSearch(e)
    }

    const getItem = (data, index) => {
        return data[index];
    };

    const Item = ({ name, mailID, content, image }) => {
        return (
            <ThemeConsumer>
                {
                    ({ theme }) => (
                        <View style={theme.InboxStyles.body}>
                            <View style={theme.InboxStyles.v1}>
                                <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Details', { name, mailID, content, image })}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Avatar
                                            source={{ uri: image }}
                                            rounded
                                            size={60} />
                                        <View style={theme.InboxStyles.v2}>
                                            <Text h4 style={theme.InboxStyles.textFied}> {name}</Text>
                                            <Text style={theme.InboxStyles.textFied}>{textTruncate(content)}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </ThemeConsumer>
        )
    }

    return (
        loading ? <Loader /> : <ThemeConsumer>
            {({ theme }) => (
                <View style={theme.InboxStyles.body}>
                    <View style={theme.InboxStyles.flex}>
                        <SearchBar scrollEnabled placeholder="Type Here ..." onChangeText={searchFunc} value={search} round lightTheme containerStyle={{ backgroundColor: "transparent" }} inputContainerStyle={{ backgroundColor: "white", borderWidth: 1, borderColor: "black", width: 340 }} />
                        <SpeechRecognition setContent={searchFunc} />
                    </View>
                    <VirtualizedList
                        data={mailInboxData}
                        initialNumToRender={3}
                        renderItem={({ item }) => {
                            let searchval = search.toLowerCase().replace(/\s/, "")
                            let outval = (item.name).toLowerCase().replace(/\s/, "")
                            if (outval.includes(searchval)) {
                                return (
                                    (item != undefined) ? <Item name={item.name} mailID={item.mailID} image={item.image} content={item.content} /> : null
                                )
                            }
                        }
                        }
                        onEndReached={onEndReached}
                        onEndReachedThreshold={0.5}
                        keyExtractor={item => item.id}
                        getItemCount={data => data.length}
                        maxToRenderPerBatch={3}
                        windowSize={5}
                        getItem={getItem}
                        ListFooterComponent={
                            <ActivityIndicator size={50} color="yellow" />
                        }
                    />
                </View >
            )
            }
        </ThemeConsumer>
    )
}

export default Inbox;