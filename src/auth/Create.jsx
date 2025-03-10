import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth'; 

export default function CreateNewAccount({ navigation }) {
 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');


  const handleSignUp = async () => {
    try {
     
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created successfully!', [
        {
          text: 'OK',
          onPress: () => {
            setFullName(''); setEmail('');
            setPassword('');
          
            navigation.navigate('login');
          },
        },
      ]);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'Email already in use');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'Invalid email format');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Error', 'Password should be at least 6 characters');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View className="bg-white flex-1">
      <View className="flex-1 justify-center px-8">
        <Text className="justify-center text-center">
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png',
            }}
            style={{ width: 192, height: 180 }}
          />
        </Text>

        <Text className="justify-center text-center text-neutral-600 mb-4">
          Join Chef Food and create an account!
        </Text>

        <View className="flex-row items-center bg-neutral-100 p-4 rounded-xl mb-4">
          <TextInput
            placeholder="Full Name"
            value={fullName}  onChangeText={setFullName}
            className="ml-3 flex-1"
          />
          <Ionicons name="person" color="gray" size={20} />
        </View>

        <View className="bg-neutral-100 flex-row items-center p-4 rounded-xl mb-4">
          <TextInput
            placeholder="Email Address" value={email}
            onChangeText={setEmail}
            className="ml-3 flex-1"
          />
          <Ionicons name="mail" color="gray" size={20} /></View>

        <View className="bg-neutral-100 flex-row items-center p-4 rounded-xl mb-4">
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="ml-3 flex-1"
          />
          <Ionicons name="eye-off" color="gray" size={20} />
        </View>

        <TouchableOpacity
          onPress={handleSignUp} 
          className="bg-amber-500 justify-center 
                flex-row p-4 rounded-xl mb-4"
        >
          <Text className="text-center text-white font-bold pr-4">
                 Create Account
          </Text>
          <Ionicons name="person-add" color="white" size={20} />
              </TouchableOpacity>

        <Text className="text-center text-neutral-500 mt-6 mb-6">
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}  > 
            <Text className="text-amber-500 font-bold">Sign In</Text>
          </TouchableOpacity>
            </Text>
      </View>
    </View>
  );
}
