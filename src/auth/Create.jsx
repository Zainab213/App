

import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { launchImageLibrary } from 'react-native-image-picker';

export default function CreateNewAccount({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (profileImage) {
        console.log('Profile Image URI: ', profileImage.uri);
      }

      Alert.alert('Success', 'Account created successfully!', [
        {
          text: 'OK',
          onPress: () => {
            setFullName('');
            setEmail('');
            setPassword('');
            setProfileImage(null);
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

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setProfileImage(response.assets[0]);
      }
    });
  };

  return (
    <View className="bg-white flex-1">
      
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, paddingBottom: 50 }}>

        
        <View className="items-center py-8 bg-white mt-5">
          {!profileImage ? (
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png',
              }}
              style={{ width: 192, height: 180 }}
            />
          ) : (
            <View className="items-center">
              <Image
                source={{ uri: profileImage.uri }}
                style={{ width: 150, height: 150, borderRadius: 75 }}
              />
              <Text className="text-lg font-bold mt-2 text-amber-500">Chef Food</Text>
            </View>
          )}
          <Text className="text-center text-neutral-600 mt-2">
            Join Chef Food and create an account!
          </Text>
        </View>

       
        <View className="flex-row items-center bg-neutral-100 p-4 rounded-xl mb-4">
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            className="ml-3 flex-1"
          />
          <Ionicons name="person" color="gray" size={20} />
        </View>

        <View className="bg-neutral-100 flex-row items-center p-4 rounded-xl mb-4">
          <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            className="ml-3 flex-1"
          />
          <Ionicons name="mail" color="gray" size={20} />
        </View>

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
          onPress={pickImage}
          className="flex-row items-center justify-center p-4 rounded-xl mb-4 bg-neutral-100 h-48 w-52 sel"
        >
          <Ionicons name="camera" size={24} color="gray" />
          <Text className="ml-2 text-neutral-500">Pick an Image</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          onPress={handleSignUp}
          className="bg-amber-500 justify-center flex-row p-4 rounded-xl mb-4"
        >
          <Text className="text-center text-white font-bold pr-4">Create Account</Text>
          <Ionicons name="person-add" color="white" size={20} />
        </TouchableOpacity>

        
        <View className="flex-row justify-center mt-6">
          <Text className="text-neutral-500">Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text className="text-amber-500 font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
