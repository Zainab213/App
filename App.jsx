// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import Counter from './screens/Counter';
// import './global.css';
// import Weather from './screens/Weather';


// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Counter" component={Counter} />
// <Stack.Screen name='Weather' component={Weather}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import Counter from './screens/Counter';
import './global.css';
import Weather from './screens/Weather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons'


const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
      <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Counter" component={Counter} />
<Tabs.Screen name='Weather' component={Weather}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


// import React from "react";
// import { View, Text } from "react-native";
// import './global.css'; // Ensure this path is correct

// export default function App() {
//     return (
//         <View className="flex-1 justify-center items-center bg-green-600">
//             <Text className="text-white text-7xl">
//                 App
//             </Text>
//         </View>
//     );
// }
