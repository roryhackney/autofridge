import { View, Text, TextInput } from "react-native";

export default function TextInputWithLabel(props: {label: string}) {
    const inputStyles = {
        width: 272,
        height: 44,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "black",
        paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12
    };
    const labelStyle = {
        lineHeight: 16,
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: 500 //medium
    }
    const containerStyles = {
        marginBottom: 20
    }
    return (
        <View style={containerStyles}>
            <Text 
                        nativeID={props.label}
                        style={labelStyle}
            >{props.label}</Text>
            <TextInput  style={inputStyles}
                        accessibilityLabel={props.label}
                        accessibilityLabelledBy={props.label}
                        placeholder={props.label}
            ></TextInput>
        </View>
    );
}