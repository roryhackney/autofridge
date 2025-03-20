import {Text, View} from "react-native";
import {Link} from "expo-router";
import { globalStyles } from "@/assets/global";

export default function Home() {
    return (
        <View>
            <Text>Implement Home screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
            <Link style={globalStyles.links} href="/">Sign In</Link>
            <Link style={globalStyles.links} href="/register">Register</Link>
            <Link style={globalStyles.links} href="/join-household">Join Household</Link>
            <Link style={globalStyles.links} href={{pathname: "/food/[id]", params: {"id": "bacon"}}}>Food (Bacon)</Link>
            <Link style={globalStyles.links} href={{pathname: "/foods/[category]", params:{"category": "Fruit"}}}>Foods (Fruit)</Link>
            <Link style={globalStyles.links} href={{pathname: "/fridge/[id]", params: {"id": "Our First Fridge"}}}>Fridge (Our First Fridge)</Link>
            <Link style={globalStyles.links} href="/fridges">All Fridges</Link>
            <Link style={globalStyles.links} href="/grocery-list">Grocery List</Link>
            <Link style={globalStyles.links} href="/household">Our Household</Link>
            <Link style={globalStyles.links} href="/notifications">Notifications Settings</Link>
            <Link style={globalStyles.links} href="/profile">My Profile</Link>
        </View>
    );
}