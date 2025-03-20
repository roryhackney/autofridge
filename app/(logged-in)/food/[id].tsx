import {Text, View, Image} from "react-native";
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

    let content = <View>
        <Text>Quantity    {foodItem.quantity}</Text>
        <GenericButton title="Add to fridge" isSmall={true} action={() => console.log("Add to fridge was clicked")}/>
    </View>;

    if (foodItem.quantity !== 0) {
        content = <View>
            <Text>Quantity:   {foodItem.quantity} Shared</Text>
            <Text>Expires: {foodItem.expires}</Text>
            <Text>Purchased: {foodItem.purchased}</Text>
            <Text>Owned by: {foodItem.owner}</Text>
            <Text>Edit</Text>
            <GenericButton title="Remove from fridge" isSmall={true} action={() => console.log("Remove from fridge was clicked")}/>
        </View>
    }
    return (
        <View>
            {getDefaultImage(foodItem.category)}
            <Text>{id}</Text>
            <Text>{foodItem.category}</Text>
            <Text>{foodItem.description}</Text>
            <Text>Edit</Text>
            {content}
            <GenericButton title="Add to grocery list" isSmall={true} isDark={true} action={() => console.log("Add to list was clicked")}/>
        </View>
    )
}

function getDefaultImage(category: string) {
    const st = { //template renders at 360/250, image file is 720/500
        width: 360,
        height: 250
    }
    if (category === "Meats/Fish") category = "Meats";
    category = "Dairy";
    return <Image style={st} source={require("@/assets/images/CategoryImages/Dairy.jpg")}/>;
    //somethings not working here
    // return <Image style={st} source={require("../../../assets/images/CategoryImages/" + category + ".jpg")}/>;
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