import globalStyles from '@/assets/global';
import { TouchableOpacity, Text } from 'react-native';

export default function GenericButton(props: {title: string, action: () => void, color?: string, width?: number}) {
    const color = props.color ? props.color : "#00434B";
    const width = props.width ? props.width : 272;

    return (
        <TouchableOpacity onPressOut={props.action}
            style={[globalStyles.genericButton, {backgroundColor: color, width: width}]}
        >
            <Text style={globalStyles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}