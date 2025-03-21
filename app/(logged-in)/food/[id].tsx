import {Text, View, Image, ImageSourcePropType, ScrollView} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import globalStyles from "@/assets/global";
import GenericButton from "@/components/GenericButton";

export default function FoodDetail() {
    const {id} = useLocalSearchParams<{"id": string}>();
    const foodItem = getFoodById(id);
    if (typeof foodItem === "string") {
        return (
            <View>
                <Text>Food {id} not found.</Text>
                <Link style={globalStyles.links} href="/home">Home</Link>
            </View>
        );
    }

    let content = <View style={{alignItems: "center"}}>
        <Text style={{marginVertical: 30}}>Quantity    {foodItem.quantity}</Text>
        <GenericButton title="Add to fridge" isSmall={true} action={() => console.log("Add to fridge was clicked")}/>
    </View>;

    if (foodItem.quantity !== 0) {
        content = <View>
            <View style={{backgroundColor: "#F1FFFE", alignItems: "center", padding: 20}}>
                <Text style={{padding:10}}>Quantity:   {foodItem.quantity} Shared</Text>
                <Text style={{padding:10}}>Expires: {foodItem.expires}</Text>
                <Text style={{padding:10}}>Purchased: {foodItem.purchased}</Text>
                <Text style={{padding:10}}>Owned by: {foodItem.owner}</Text>
                <Text style={[globalStyles.links, {padding:5}]}>Edit</Text>
            </View>
            <GenericButton title="Remove from fridge" isSmall={true} action={() => console.log("Remove from fridge was clicked")}/>
        </View>
    }
    return (
        <ScrollView>
        <View style={{alignItems: "center"}}>
            {getDefaultImage(foodItem.category)}
            <View style={{padding: 10, alignItems: "center"}}>
                <Text style={{fontSize: 21, fontWeight: "bold", marginTop: 10}}>{id}</Text>
                <Text style={{color: "#4C4C4C"}}>{foodItem.category}</Text>
                <Text>{foodItem.description}</Text>
                <Text style={[globalStyles.links, {marginVertical: 10}]}>Edit</Text>
                {content}
                <GenericButton title="Add to grocery list" isSmall={true} isDark={true} action={() => console.log("Add to list was clicked")}/>
            </View> 
        </View>
        </ScrollView>
    )
}

function getDefaultImage(category: string) {
    const st = { //template renders at 360/250, image file is 720/500
        width: "100%",
        maxWidth: "720"
    }
    const catToImage: {[key: string]: ImageSourcePropType} = {
        "Beverages": require("@/assets/images/CategoryImages/Beverages.jpg"),
        "Condiments": require("@/assets/images/CategoryImages/Condiments.jpg"),
        "Dairy": require("@/assets/images/CategoryImages/Dairy.jpg"),
        "Fruit": require("@/assets/images/CategoryImages/Fruit.jpg"),
        "Grains": require("@/assets/images/CategoryImages/Grains.jpg"),
        "Meals": require("@/assets/images/CategoryImages/Meals.jpg"),
        "Meats/Fish": require("@/assets/images/CategoryImages/Meats.jpg"),
        "Vegetables": require("@/assets/images/CategoryImages/Vegetables.jpg")
    }
    const source = catToImage[category];
    return <Image resizeMode="cover" style={st} source={source}/>;
}

function getFoodById(id: string) {
    if (id in foodDefinitions) {
        for (const fridge in fridgesInventory) {
            const food = fridgesInventory[fridge][id];
            if (food) {
                return {
                    category: foodDefinitions[id]["category"],
                    description: foodDefinitions[id]["description"],
                    quantity: food["quantity"],
                    expires: food["expires"],
                    purchased: food["purchased"],
                    owner: food["owner"]
                };
            }
        }
        return {
            category: foodDefinitions[id]["category"],
            description: foodDefinitions[id]["description"],
            quantity: 0
        };
    }
    return "Food not found";
}

type foodJson = {
    "quantity": number,
    "expires": string,
    "purchased": string,
    "owner": string
}

type inventory = {
    [food: string]: foodJson,
}

type fridges = {
    [fridge: string]: inventory
}

type foodDetails = {
    "category": string,
    "description": string
}

type foodDetailsList = {
    [food: string]: foodDetails,
}

//stub for now, ideally we'd implement a db
const fridgesInventory: fridges = {
    "Fridge 1": {
        "Bacon": {
            "quantity": 1,
            "expires": "March 25th, 2025",
            "purchased": "March 19th, 2025",
            "owner": "Rojee"
        },
        "Granny Smith Apple": {
            "quantity": 6,
            "expires": "March 24th, 2025",
            "purchased": "March 19th, 2025",
            "owner": "Edale"
        }
    }
}

const foodDefinitions: foodDetailsList = {
    "Bacon": {
        "category": "Meats/Fish",
        "description": "Tasty bacon for breakfast"
    },
    "Cheese": {
        "category": "Dairy",
        "description": "Cheese good for grating and snacking"
    },
    "Granny Smith Apple": {
        "category": "Fruit",
        "description": "Delicious apples, kind of tart. Would make good pie. Also tasty dipped in caramel."
    }
}