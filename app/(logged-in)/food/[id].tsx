import {Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import { globalStyles } from "@/assets/global";

export default function FoodDetail() {
    const {id} = useLocalSearchParams<{"id": string}>();
    return (
        <View>
            <Text>Implement Food Detail ({id}) screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
}