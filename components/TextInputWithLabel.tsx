import { View, Text, TextInput, StyleSheet } from "react-native";

export default function TextInputWithLabel(props: {label: string}) {
    const styles = StyleSheet.create({
        input: {
            width: 272,
            height: 44,
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "black",
            paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12
        },
        label: {
            lineHeight: 16,
            paddingBottom: 5,
            fontSize: 16,
            fontWeight: 500
        },
        container: {
            marginBottom: 20
        }
    })

    return (
        <View style={styles.container}>
            <Text 
                        nativeID={props.label}
                        style={styles.label}
            >{props.label}</Text>
            <TextInput  style={styles.input}
                        accessibilityLabel={props.label}
                        accessibilityLabelledBy={props.label}
                        placeholder={props.label}
            ></TextInput>
        </View>
    );
}