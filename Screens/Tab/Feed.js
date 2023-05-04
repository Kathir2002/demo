import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { TextInput } from "react-native-gesture-handler";

const Feed = ({ setContent, content }) => {
    const richText = useRef();

    const richTextHandler = e => {
        const replaceHTML = e.replace(/<(.|\n)*?>/g, "").trim();
        const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();
        setContent(replaceWhiteSpace)
    }
    console.log("jhfadskjhkas", content);
    return (
        <View style={styles.container}>

            <RichEditor
                initialContentHTML={content}
                ref={richText}
                style={styles.editorStyle}
                placeholder="Content"
                initialHeight={150}
                onChange={richTextHandler}
            />
            <RichToolbar
                editor={richText}
                actions=
                {[
                    actions.insertImage,
                    actions.setBold,
                    actions.setItalic,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertLink,
                    actions.keyboard,
                    actions.setStrikethrough,
                    actions.setUnderline,
                    actions.removeFormat,
                    actions.insertVideo,
                    actions.checkboxList,
                    actions.undo,
                    actions.redo,
                ]}
            />
            <Text style={{ color: "black" }}>Res: {content}</Text>
            <TextInput value={content} style={{ color: 'black' }} onChangeText={val => setContent(val)} />
        </View>
    );
};
const styles = StyleSheet.create({
    editorStyle: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: "#ccaf9b",
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        fontSize: 20,
    },
    container: {
        flexDirection: "column-reverse"
    }
})
export default Feed


