import globalStyles from '@/assets/globalStyles';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';

export default function GenericButton(props: {title: string, action: () => void, isDark?: boolean, isSmall?: boolean, style?: StyleProp<ViewStyle>}) {
    const color = props.isDark ? "#00434B" : "#B4E6E4";
    const textColor = props.isDark ? "white" : "black";
    const width = props.isSmall ? 172 : 272;

    return (
        <TouchableOpacity onPressOut={props.action}
            style={[globalStyles.genericButton, {backgroundColor: color, width: width}, props.style]}
        >
            <Text style={[globalStyles.genericButtonText, {"color": textColor}]}>{props.title}</Text>
        </TouchableOpacity>
    );
}