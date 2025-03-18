import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import NotificationsScreen from "../screens/NotificationsScreen"; 
import MenuScreen from "../screens/MenuScreen"; 
import BellIcon from "../assets/icons/BellIcon"; // Bell icon
import MenuIcon from "../assets/icons/Menu"; // Menu icon

const Tab = createMaterialTopTabNavigator();

// Correctly type the icons object
const icons: Record<"Notifications" | "Menu", React.FunctionComponent<any>> = {
  Notifications: BellIcon, // Bell icon for Notifications tab
  Menu: MenuIcon, // Menu icon (hamburger) for Menu tab
};

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const IconComponent = icons[route.name as "Notifications" | "Menu"];
          const IconColor = focused ? "#23AAA5" : "grey";

          return (
            <View style={{ alignItems: "center", justifyContent: "center", paddingBottom: 2 }}>
              {/* Ensure your icons respect the passed props */}
              <IconComponent width={24} height={24} color={IconColor} />
            </View>
          );
        },
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "#23AAA5",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12, marginTop:0, paddingBottom: 6 }, // Adjust padding/margins
      })}
    >
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}
