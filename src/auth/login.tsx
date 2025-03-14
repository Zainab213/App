import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth'; 
import { Screenprop } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type prop = NativeStackScreenProps<Screenprop, 'login'>

const Login = ({ navigation }: prop) => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [isEye, setEye] = useState<boolean>(false);

  
  const handleLogin = async () => {
    try {
      
      await auth().signInWithEmailAndPassword(username, password);
      
      navigation.navigate("Welcome" ); 
    } catch (error) {
      
      if ((error as any).code === 'auth/user-not-found') {
        Alert.alert('Error', 'No user found with this email');
      } else if ((error as any).code === 'auth/wrong-password') {
        Alert.alert('Error', 'Incorrect password');
      } else {
        Alert.alert('Error', (error as Error).message);
      }
    }
  };

  return (
    <View className="flex-1 bg-white">
 
      <View className="flex-1 justify-center px-8">
        <View className="justify-center items-center">
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png',
            }}
            className="h-52 w-52"
          />
        </View>
        <Text className="text-neutral-500 text-center text-lg mb-6">
          Sign in to your Chef Food account.
        </Text>
        <View className="flex-row items-center bg-neutral-100 p-4 rounded-xl mb-4">
          <TextInput
            className="ml-3 flex-1"
            placeholder="Email Address"
            value={username}
            onChangeText={setUsername}
          />
          <Ionicons name="mail" size={20} color="gray" />
        </View>
        <View className="flex-row items-center bg-neutral-100 p-4 rounded-xl mb-6">
          <TextInput
            className="ml-3 flex-1"
            placeholder="Password"
            secureTextEntry={!isEye}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setEye(!isEye)}>
          <Ionicons name={isEye ? 'eye' : 'eye-off'} size={20} color="gray" />
          </TouchableOpacity>
        </View>       
        <TouchableOpacity
          onPress={handleLogin} 
          className="bg-amber-500 p-4 rounded-xl flex-row items-center justify-center shadow-md"
        >
          <Text className="text-white font-bold text-xl">Sign in</Text>
          <Ionicons name="log-in" size={20} color="white" className="ml-2" />
        </TouchableOpacity>

<View className="flex-row justify-center mt-6">
          <Text className="text-neutral-500">Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('CreateNewAccount')}>
            <Text className="text-amber-500 font-bold">Create</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default Login;
