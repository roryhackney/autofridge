import { Text, View } from "react-native";
import { Link } from "expo-router";
import globalStyles from "@/assets/globalStyles";

export default function Home() {
    return (
        <View style={{flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "flex-start"}}>
            <Text style={{fontSize: 16, color: "black"}}>Implement Home screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
            <Link style={globalStyles.links} href="/">Sign In</Link>
            <Link style={globalStyles.links} href="/register">Register</Link>
            <Link style={globalStyles.links} href="/join-household">Join Household</Link>
            <Link style={globalStyles.links} href={{pathname: "/food/[id]", params: {"id": "Bacon"}}}>Food (Bacon)</Link>
            <Link style={globalStyles.links} href={{pathname: "/foods/[category]", params:{"category": "Fruit"}}}>Foods (Fruit)</Link>
            <Link style={globalStyles.links} href={{pathname: "/fridge/[id]", params: {"id": "Fridge 1"}}}>Fridge (Fridge 1)</Link>
            <Link style={globalStyles.links} href="/fridges">All Fridges</Link>
            <Link style={globalStyles.links} href="/grocery-list">Grocery List</Link>
            <Link style={globalStyles.links} href="/household">Our Household</Link>
            <Link style={globalStyles.links} href="/notification">Notifications Settings</Link>
            <Link style={globalStyles.links} href="/profile">My Profile</Link>
        </View>
    );
}
