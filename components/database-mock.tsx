import { Image, ImageSourcePropType, Dimensions } from "react-native";

function getDefaultImage(category: string) {
    const catToImage: {[key: string]: {source: ImageSourcePropType, alt: string}} = {
        "Beverages": {"source": require("@/assets/images/CategoryImages/Beverages.jpg"), "alt": "Cup of lemonade and three cans of soda"},
        "Condiments": {"source": require("@/assets/images/CategoryImages/Condiments.jpg"), "alt": "Ketchup bottle and three cups of condiments"},
        "Dairy": {"source": require("@/assets/images/CategoryImages/Dairy.jpg"), "alt": "Three eggs and some butter"},
        "Fruit": {"source": require("@/assets/images/CategoryImages/Fruit.jpg"), "alt": "An orange slice and an apple"},
        "Grains": {"source": require("@/assets/images/CategoryImages/Grains.jpg"), "alt": "A pile of grains next to a loaf of challah bread"},
        "Meals": {"source": require("@/assets/images/CategoryImages/Meals.jpg"), "alt": "A lunchbox holding a sandwich next to three containers of leftover fruit"},
        "Meats/Fish": {"source": require("@/assets/images/CategoryImages/Meats.jpg"), "alt": "A piece of salmon next to a steak"},
        "Vegetables": {"source": require("@/assets/images/CategoryImages/Vegetables.jpg"), "alt": "Napa cabbage, two carrots, and a couple pea pods"}
    }
    return catToImage[category];
}

function convertSrcToImage(source: {source: ImageSourcePropType, alt: string}) {
    //we are assuming image is 360/250 (1.44 ratio) which is what I saved all category/food images as so far
    const width = Dimensions.get("window").width;
    const height = width / 360 * 250;
    return <Image alt={source.alt} source={source.source} style={{width: width, height: height, maxWidth: 540, maxHeight: 375, alignSelf: "center"}}/>;
}

export function getFoodById(id: string) {
    if (id in foodDefinitions) {
        const category = foodDefinitions[id]["category"];
        let image = foodDefinitions[id]["image"];
        if (! image) image = getDefaultImage(category);
        const imageElement = convertSrcToImage(image);
        for (const fridge in fridgesInventory) {
            const food = fridgesInventory[fridge][id];
            if (food) {
                return {
                    category: category,
                    description: foodDefinitions[id]["description"],
                    quantity: food["quantity"],
                    expires: food["expires"],
                    purchased: food["purchased"],
                    owner: food["owner"],
                    image: imageElement
                };
            }
        }
        return {
            category: foodDefinitions[id]["category"],
            description: foodDefinitions[id]["description"],
            quantity: 0,
            image: imageElement
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

type fridges = {
    [fridge: string]: {[food: string]: foodJson}
}

type foodDetails = {
    "category": string,
    "description": string,
    "image"? : {
        "source": ImageSourcePropType,
        "alt": string
    }
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

const foodDefinitions: {[food: string]: foodDetails} = {
    "Bacon": {
        "category": "Meats/Fish",
        "description": "Tasty bacon for breakfast",
        "image": {
            "source": require("@/assets/images/Bacon.jpg"),
            "alt": "A piece of bacon over a red background"
        }
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