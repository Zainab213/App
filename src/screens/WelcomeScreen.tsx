import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import { NavigationProp } from '@react-navigation/native';
import { Screenprop } from '../types';

export default function WelcomeScreen() {
  const ring1padding = useSharedValue(0)
  const ring2padding = useSharedValue(0)
  const navigation = useNavigation<NavigationProp<Screenprop>>();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => ring1padding.value = withSpring(ring1padding.value+ 49), 100);
    setTimeout(() => ring2padding.value = withSpring(ring2padding.value+ 10), 300)
    setTimeout(() => navigation.navigate('Home'), 2500)
  }, [])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar barStyle="dark-content" backgroundColor="#f59e0b" />

      <Animated.View className="bg-white/20 rounded-full " style={{padding: ring1padding}} >
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2padding}}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png',
            }}
            style={{width: 200, height: 200}}
          />
        </Animated.View>
      </Animated.View>

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
