import {Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import globalStyles from "@/assets/global";

export default function FoodDetail() {
    const {category} = useLocalSearchParams<{category: string}>();
    return (
        <View>
            <Text>Implement Category pages eg Vegetable ({category}) screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
}