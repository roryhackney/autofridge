import { View, Text, TextInput, StyleSheet } from "react-native"
import RoundButton from "./RoundButton";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

function ensureInRangeInt(num: number) {
    if (num < 0) return 0;
    if (num > 99) return 99;
    return Math.floor(num);
}

export default function QuantityInput(props: {initialValue: number}) {
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
            marginBottom: 20,
            width: 142
        }
    });

    const newStyles = StyleSheet.create({
        input: {
            width: 50,
            marginLeft: 5,
            marginRight: 5,
            textAlign: "center"
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }
    })

    const [quantity, setQuantity] = useState(ensureInRangeInt(props.initialValue));
    const [inputVal, setInputVal] = useState("" + quantity);

    function updateQuantityBy(amount: number) {
        const newNum = quantity + amount;
        setQuantity(newNum);
        setInputVal(newNum.toString());
    }

    return (
        <View style={styles.container}>
            <Text
                style = {styles.label}
                nativeID="quantity-label"
            >Quantity</Text>
            <View style={newStyles.row}>
                <RoundButton label="—" disabled={quantity <= 0} onTouch={(() => updateQuantityBy(-1))}/>
                <TextInput
                    style={[styles.input, newStyles.input]}
                    keyboardType="numeric"
                    accessibilityLabel="Quantity"
                    accessibilityLabelledBy="quantity-label"
                    defaultValue = {inputVal}
                    value = {inputVal}
                    maxLength={2}
                    onChangeText={num => {
                        let cleanedNum = parseInt(num);
                        if (isNaN(cleanedNum)) {
                            setInputVal(num);
                        } else {
                            const value = ensureInRangeInt(cleanedNum); 
                            setQuantity(value);
                            setInputVal(value.toString());
                        }
                    }}
                ></TextInput>
                <RoundButton label="+" disabled={quantity >= 99} onTouch={() => updateQuantityBy(1)}/>
            </View>
        </View>
    );
}