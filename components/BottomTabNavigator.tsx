import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MyFridgeScreen from "../screens/MyFridgeScreen";
import GroceryListScreen from "../screens/GroceryListScreen";

const Tab = createBottomTabNavigator();

const icons: Record<string, any> = {
  Home: require("../assets/icons/home.png"),
  "My Fridge": require("../assets/icons/myfridge.png"),
  "Grocery List": require("../assets/icons/grocerylist.png"),
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <View style={{ opacity: focused ? 1 : 0.5 }}>
            <Image source={icons[route.name]} style={{ width: 24, height: 24 }} />
          </View>
        ),
      })}
    >
      <Tab.Screen name="My Fridge" component={MyFridgeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Grocery List" component={GroceryListScreen} />
    </Tab.Navigator>
  );
}
