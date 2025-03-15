import {useEffect, useState} from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function RoundButton(props: {label: string, disabled: boolean, onTouch: CallableFunction}) {
    const GRAY = "#D1D1D1";
    const TEAL = "#B4E6E4";
    let [color, setColor] = useState(props.disabled ? GRAY: TEAL);
    useEffect(() => {
        if (props.disabled) {
            setColor(GRAY);
        } else {
            setColor(TEAL);
        }
    }, [props.disabled]);
    const styles = StyleSheet.create({
        button : {
            width: 40,
            height: 40,
            backgroundColor: color,
            borderRadius: 20
        },
        text: {
            textAlign: "center",
            lineHeight: 40,
            fontWeight: 700
        }    
    })
    return (
        <Pressable
            style={styles.button}
            accessible
            accessibilityLabel={props.label}
            disabled={props.disabled}
            onPressOut={() => {
                props.onTouch();
            }}
        >
            <Text style={styles.text}>{props.label}</Text>
        </Pressable>
    );
}