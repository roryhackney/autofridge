import {Modal, View} from "react-native";
import TextInputWithLabel from "./TextInputWithLabel";
import GenericButton from "./GenericButton";

export default function EditFoodInfo(props: {visible: boolean, setVisible: Function, food: {name: string, category: string, description: string}}) {
    const style = {
        width: 600,
        height: 600,
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2
    }
    return <Modal transparent={true} visible={props.visible} onRequestClose={() => props.setVisible(false)}>
        <View style={style}>
            <TextInputWithLabel label="Name" initialValue={props.food.name}/>
            {/* TODO: make this a select input or RN equivalent?? */}
            <TextInputWithLabel label="Category" initialValue={props.food.category}/>
            {/* TODO: make this a textarea or RN equivalent?? */}
            <TextInputWithLabel label="Description" initialValue={props.food.description}/>
            <GenericButton isDark={true} title="Save changes" action={
                () => {
                    console.log("Implement updating food info");
                    props.setVisible(false);
                }
            }/>
        </View>
    </Modal>
}