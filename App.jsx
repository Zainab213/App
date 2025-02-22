import "./global.css"
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Weather from './src/screens/Weather';
import HomeScreen from './src/screens/HomeScreen';
import Counter from './src/screens/Counter';

const Tabs = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Notes"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#333'},
          tabBarActiveTintColor: '#e05644',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tabs.Screen
          name="Notes"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Counter"
          component={Counter}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Weather"
          component={Weather}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="cloud" size={size} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}






// import 'react-native-gesture-handler'; // 👈 Must be at the top
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // ✅ Import Screens
// import Weather from './src/screens/Weather';
// import HomeScreen from './src/screens/HomeScreen';
// import Counter from './src/screens/Counter';
// import SettingsScreen from './src/screens/Settings';

// const Drawer = createDrawerNavigator();
// const Tabs = createBottomTabNavigator();

// // ✅ Bottom Tab Navigator
// function BottomTabs() {
//   return (
//     <Tabs.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: { backgroundColor: '#222' },
//         tabBarActiveTintColor: '#e05644',
//         tabBarInactiveTintColor: 'gray',
//       }}>
//       <Tabs.Screen
//         name="Notes"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="book-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Counter"
//         component={Counter}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="add-circle" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Weather"
//         component={Weather}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="cloud" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs.Navigator>
//   );
// }

// // ✅ Drawer Navigator (Wraps BottomTabs)
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: { backgroundColor: '#222' },
//           drawerActiveTintColor: '#e05644',
//           drawerInactiveTintColor: 'gray',
//         }}>
//         <Drawer.Screen
//           name="Counter"
//           component={Counter}
//           options={{
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="add-circle" size={size} color={color} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="weather"
//           component={Weather}
//           options={{
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="cloud" size={size} color={color} />
//             ),
//           }}
//         />
//                 <Drawer.Screen
//           name="Notes"
//           component={HomeScreen}
//           options={{
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="book-outline" size={size} color={color} />
//             ),
//           }}
//         />
//                 <Drawer.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="settings-outline" size={size} color={color} />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
