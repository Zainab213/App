import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth'; // Import Firebase authentication

const Login = ({ navigation }) => {
  const [username, setUsername] = useState(""); // This is the email
  const [password, setPassword] = useState(""); // This is the password

  // Function to handle login
  const handleLogin = async () => {
    try {
      // Use Firebase authentication to sign in the user
      await auth().signInWithEmailAndPassword(username, password);
      // Navigate to the Home screen on successful login
      navigation.navigate('Home'); // You can change 'Home' to whatever your home screen is named
    } catch (error) {
      // Handle error and show alerts
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'No user found with this email');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'Incorrect password');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View className="flex-1 bg-white">

      <View className="flex-1 justify-center px-8">
        <Text className="text-5xl font-bold text-center text-amber-500">
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png',
            }}
            className="h-52 w-48"
          />
        </Text>
        <Text className="text-neutral-500 text-center text-lg mb-6">
          Sign in to your Chef Food account.
        </Text>

        {/* Username (Email) Input Field */}
        <View className="flex-row items-center bg-neutral-100 p-4 rounded-xl mb-4">
          <TextInput
            className="ml-3 flex-1"
            placeholder="Email Address"
            value={username}
            onChangeText={setUsername}
          />
          <Ionicons name="mail" size={20} color="gray" />
        </View>

        {/* Password Input Field */}
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

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={handleLogin} // Call handleLogin on press
          className="bg-amber-500 p-4 rounded-xl flex-row items-center justify-center shadow-md"
        >
          <Text className="text-white font-bold text-lg">Sign in</Text>
          <Ionicons name="log-in" size={20} color="white" className="ml-2" />
        </TouchableOpacity>

        {/* Navigation to Create Account Screen */}
        <Text className="text-center text-neutral-500 mt-6 mb-6">
          Don't have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate('CreateNewAccount')}>
            <Text className="text-amber-500 font-bold">Create</Text>
          </TouchableOpacity>
        </Text>
      </View>

    </View>
  );
};

export default Login;
