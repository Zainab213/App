import { ActivityIndicator } from "react-native";
import { View } from "react-native";

export default function Loading(props){
    return(
        <View>
            <ActivityIndicator {...props} />
        </View>
    )
}