import {Modal} from "react-native";
import TextInputWithLabel from "./TextInputWithLabel";
import GenericButton from "./GenericButton";

export default function EditFoodInfo(props: {visible: boolean, setIsVisible: Function, food: {name: string, category: string, description: string}}) {
    return <Modal visible={props.visible} onRequestClose={() => props.setIsVisible(false)}>
        <TextInputWithLabel label="Name" initialValue={props.food.name}/>
        {/* TODO: make this a select input or RN equivalent?? */}
        <TextInputWithLabel label="Category" initialValue={props.food.category}/>
        {/* TODO: make this a textarea or RN equivalent?? */}
        <TextInputWithLabel label="Description" initialValue={props.food.description}/>
        <GenericButton isDark={true} title="Save changes" action={
            () => {
                console.log("Implement updating food info");
                props.setIsVisible(false);
            }
        }/>
    </Modal>
}