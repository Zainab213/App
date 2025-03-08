// import { View,Text } from "react-native";

// export default function Login() {
//     return(
//     <View className="bg-black flex-1">
//         <Text className="text-neutral-300 text-6xl">
//             Login
//         </Text>
//     </View>
//     )
// }


import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-white">
     
      {/* <LinearGradient
        colors={["#ff7e5f", "#ffbb87"]}
        className="absolute top-0 left-0 right-0 h-40 rounded-b-[80px]"
      /> */}


      <View className="flex-1 justify-center px-8">
        <Text className="text-5xl font-bold text-center text-amber-500">Hello</Text>
        <Text className="text-neutral-500 text-center text-lg mb-6">
          Sign in to your account
        </Text>

     
        <View className="flex-row items-center bg-neutral-100 p-4 rounded-xl mb-4">
          
          <TextInput
            className="ml-3 flex-1"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Ionicons name="person" size={20} color="gray" />
        </View>

        
        <View className="flex-row items-center bg-neutral-100 p-4 rounded-xl mb-6">
          
          <TextInput
            className="ml-3 flex-1"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Ionicons name="eye-off" size={20} color="gray" />
        </View>


        
        <TouchableOpacity className="bg-amber-500 p-4 rounded-xl flex-row items-center justify-center">
          <Text className="text-white font-bold text-lg">Sign in</Text>
          <Ionicons name="log-in" size={20} color="white" className="ml-2" />
        </TouchableOpacity>

        
        <Text className="text-center text-neutral-500 mt-6">
          Don't have an account?{" "}
          <Text className="text-amber-500 font-bold">Create</Text>
        </Text>
      </View>

      
      {/* <LinearGradient
        colors={["#ff7e5f", "#ffbb87"]}
        className="absolute bottom-0 left-0 right-0 h-40 rounded-t-[80px]"
      /> */}
    </View>
  );
};

export default Login;
