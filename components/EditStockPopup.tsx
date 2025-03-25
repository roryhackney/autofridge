import {Modal, View, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import TextInputWithLabel from "./TextInputWithLabel";
import GenericButton from "./GenericButton";
import QuantityInput from "./QuantityInput";
import { useState } from "react";

export default function EditStockPopup(props: {visible: boolean, setVisible: Function, food: {quantity: number, expires?: string, purchased?: string, owner?: string}}) {
    const [expires, setExpires] = useState(props.food.expires);
    const [purchased, setPurchased] = useState(props.food.purchased);
    const [owner, setOwner] = useState(props.food.owner);
    const [shared, setShared] = useState("Yes");

    const style = {
        width: 345,
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2,
        padding: 24,
    }

    return <Modal
            transparent={true} visible={props.visible}
            onRequestClose={() => props.setVisible(false)}
        >
        {/* transparent screen behind modal, press to close modal */}
        <TouchableOpacity onPress={() => props.setVisible(false)} style={{flex: 1, flexWrap: "wrap", flexDirection: "column", justifyContent: "center", alignContent: "center", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
            {/* modal content - not touchable so it doesnt close on click */}
            <TouchableWithoutFeedback>
                {/*Edit food form*/}
                <View style={style}>
                    <QuantityInput initialValue={props.food.quantity}/>
                    {/* TODO: make this a select input or RN equivalent?? */}
                    <TextInputWithLabel label="Shared" value={shared} onChangeText={(value) => setShared(value)}/>
                    {/* TODO: make this a calendar picker or RN equivalent?? */}
                    <TextInputWithLabel label="Expires on" value={expires} onChangeText={(value) => {setExpires(value)}}/>
                    <TextInputWithLabel label="Purchased on" value={purchased} onChangeText={(value) => {setPurchased(value)}}/>
                    <TextInputWithLabel label="Owner" value={owner} onChangeText={(value) => {setOwner(value)}}/>
                    <GenericButton isDark={true} title="Save changes" action={
                        () => {
                            console.log("Updating stock info...");
                            props.setVisible(false);
                        }
                    }/>
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    </Modal>
}