import {Modal, View, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import TextInputWithLabel from "./TextInputWithLabel";
import GenericButton from "./GenericButton";
import { useState } from "react";

export default function EditFoodPopup(props: {visible: boolean, setVisible: Function, food: {name: string, category: string, description: string}}) {
    const [name, setName] = useState(props.food.name);
    const [category, setCategory] = useState(props.food.category);
    const [description, setDescription] = useState(props.food.description);


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
                    <TextInputWithLabel label="Name" value={name} onChangeText={(value) => setName(value)}/>
                    {/* TODO: make this a select input or RN equivalent?? */}
                    <TextInputWithLabel label="Category" value={category}onChangeText={(value) => setCategory(value)}/>
                    {/* TODO: make this a textarea or RN equivalent?? */}
                    <TextInputWithLabel label="Description" value={description} onChangeText={(value) => setDescription(value)}/>
                    <GenericButton isDark={true} title="Save changes" action={
                        () => {
                            console.log("Updating food info...");
                            props.setVisible(false);
                        }
                    }/>
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    </Modal>
}