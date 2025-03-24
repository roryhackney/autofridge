import {Text, View, ScrollView} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import globalStyles from "@/assets/global";
import GenericButton from "@/components/GenericButton";
import { getFoodById } from "@/components/database-mock";
import { useState } from "react";
import EditFoodInfo from "@/components/EditFoodInfo";

export default function FoodDetail() {
    const {id} = useLocalSearchParams<{"id": string}>();
    const foodItem = getFoodById(id);

    if (typeof foodItem === "string") {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.bodyText}>Food {id} not found.</Text>
                <Link style={globalStyles.links} href="/home">Home</Link>
            </View>
        );
    }

    let content = <View style={{alignItems: "center"}}>
        <Text style={[globalStyles.bodyText, {marginVertical: 30}]}>Quantity    {foodItem.quantity}</Text>
        <GenericButton title="Add to fridge" isSmall={true} action={() => console.log("Add to fridge was clicked")}/>
    </View>;

    if (foodItem.quantity !== 0) {
        content = <View style={{alignItems: "center"}}>
            <View style={{backgroundColor: "#F1FFFE", padding: 20, alignItems: "center", marginBottom: 25}}>
                <View style={{justifyContent: "space-between", flexDirection: "row"}}>
                    <View>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>Quantity:</Text>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>Expires:</Text>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>Purchased:</Text>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>Owned by:</Text>
                    </View>
                    <View>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>{foodItem.quantity}  Shared</Text>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>{foodItem.expires}</Text>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>{foodItem.purchased}</Text>
                        <Text style={[globalStyles.bodyText, {padding:10}]}>{foodItem.owner}</Text>
                    </View>
                </View>
                <Text style={[globalStyles.links, {padding:5}]}>Edit</Text>
            </View>
            <GenericButton style={{marginBottom: 4}} title="Remove from fridge" isSmall={true} action={() => console.log("Remove from fridge was clicked")}/>
        </View>
    }

    const [visible, setVisible] = useState(false);
    return (
        <ScrollView contentContainerStyle={{alignContent: "center", backgroundColor: "white"}}>
            {foodItem.image}
            <View style={{padding: 10, alignItems: "center"}}>
                <EditFoodInfo visible={visible} setVisible={setVisible} food={{name: id, category: foodItem.category, description: foodItem.description}}/>
                <Text style={{fontSize: 21, fontWeight: "bold", marginTop: 10}}>{id}</Text>
                <Text style={[globalStyles.bodyText, {color: "#4C4C4C"}]}>{foodItem.category}</Text>
                <Text style={globalStyles.bodyText}>{foodItem.description}</Text>
                <Text style={[globalStyles.links, {marginVertical: 10}]} onPress={() => setVisible(true)}>Edit</Text>
                {content}
                <GenericButton title="Add to grocery list" isSmall={true} isDark={true} action={() => console.log("Add to list was clicked")}/>
            </View> 
        </ScrollView>
    )
}