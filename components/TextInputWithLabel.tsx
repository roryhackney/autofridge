import { View, Text, TextInput, StyleSheet } from "react-native";

export default function TextInputWithLabel(props: {label: string; value?: string; onChangeText?:(text:string) => void;}) {
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
                        placeholderTextColor="lightgray"
                        // This allows input value to be saved when user clicks saved button. This are set as optional
                        value={props.value || ""}    // displays the stored value
                        onChangeText={props.onChangeText || (() => {})}    // Updates the value as the user types
            ></TextInput>
        </View>
    );
}
