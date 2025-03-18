import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MyFridgeScreen from "../screens/MyFridgeScreen";
import GroceryListScreen from "../screens/GroceryListScreen";
import HomeIcon from "../assets/icons/HomeIcon"; 
import MyFridgeIcon from "../assets/icons/MyFridgeIcon";
import GroceryListIcon from "../assets/icons/GroceryListIcon";


const Tab = createBottomTabNavigator();

const icons: Record<string, any> = {

  "My Fridge": MyFridgeIcon,
  "Home": HomeIcon,
  "Grocery List": GroceryListIcon,

};

export default function BottomTabNavigator() {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const IconComponent = icons[route.name];
            const IconColor = focused ? "#23AAA5" : "gray";

            return (
              <View style={{ alignItems: "center", justifyContent: "center", paddingBottom: 6 }}>
                {typeof IconComponent === "function" ? (
                  <IconComponent width={24} height={24} color={IconColor} />
                ) : (
                  <Image source={IconComponent as any} style={{ width: 24, height: 24, tintColor: IconColor }} />
                )}
              </View>
            );
          },
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#23AAA5", 
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 12, marginTop: -2, paddingBottom: 20}
        })}
      >
        <Tab.Screen name="My Fridge" component={MyFridgeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Grocery List" component={GroceryListScreen} />
      </Tab.Navigator>

  );
}
