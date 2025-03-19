import { Text, View } from "react-native";
import {Link} from "expo-router";
import globalStyles from "@/assets/global";
import GenericButton from "@/components/GenericButton";

export default function Index() {
    return (
        <View>
            <Text>Implement Sign Up screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
            <GenericButton title="My button" action={()=>console.log("clicked")} color="#23AAA5" width={150}/>
        </View>
    );
}