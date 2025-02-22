import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar barStyle="light-content" />

      <View className="bg-white/20 rounded-full p-8">
        <View className="bg-white/20 rounded-full p-5">
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png',
            }}
            style={{width: 200, height: 200}}
          />
        </View>
      </View>

      <View className="flex items-center mt-7 space-y-2">
        <Text className="font-bold text-5xl text-white tracking-widest">
          Foody
        </Text>
        <Text className="font-medium text-2xl text-white tracking-widest">
          Food is always right
        </Text>
      </View>
    </View>
  );
}
