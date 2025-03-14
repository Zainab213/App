import { JSX } from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { View } from "react-native";

export default function Loading(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<ActivityIndicator> & Readonly<ActivityIndicatorProps>){
    return(
        <View>
            <ActivityIndicator {...props} />
        </View>
    )
}